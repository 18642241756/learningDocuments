function Promise(excutor) {

    this.promiseState = 'pending'
    this.promiseResult = null

    // 保存 异步时没有立即执行的状态 
    this.callback = {}
    
    let self = this

    function resolve(data) {
        if (self.promiseState !== 'pending') return
        // 1.修改对象 promiseState 状态
        self.promiseState = 'fulfilled'
        // 2.修改对象 promiseResult 结果值
        self.promiseResult = data

        if(self.callback.onResolve){
            self.callback.onResolve(data)
        }
    }

    function reject(data) {
        if (self.promiseState !== 'pending') return
        // 1.修改对象 promiseState 状态
        self.promiseState = 'rejected'
        // 2.修改对象 promiseResult 结果值
        self.promiseResult = data

        if(self.callback.onReject){
            self.callback.onReject(data)
        }
    }
    try {
        // excutor 执行器函数 同步调用
        excutor(resolve, reject)
    } catch (error) {
        reject(error)
    }

}

//添加then方法
Promise.prototype.then = function (onResolve, onReject) {
    if (this.promiseState === 'fulfilled') {
        onResolve(this.promiseResult)
    }
    if (this.promiseState === 'rejected') {
        onReject(this.promiseResult)
    }
    if (this.promiseState === 'pending') {
        this.callback = {
            onResolve:onResolve,
            onReject:onReject
        }
    }
}