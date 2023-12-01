function Promise(excutor){

    function resolve(data){

    }

    function reject(data){

    }

    // excutor 执行器函数 同步调用
    excutor(resolve,reject)
    
}

//添加then方法
Promise.prototype.then = function(onResolve,onReject){
    
}