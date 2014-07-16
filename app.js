/**
 * Created by Ben Gedi on 16/07/2014.
 */
(function() {
    function Tasks() {
        this.taskArr = [
            {title: 'first', desc: 'I am number 1', done: false}
        ];

        this.addTask = function() {
            if(this.taskArr.indexOf(this.task) == -1) {
                this.task.done = false;
                this.taskArr.push(this.task);
            }
            this.task = {};
            this.isEdit = false;
        }.bind(this);

        this.removeTask = function(task){
            var index = this.taskArr.indexOf(task);
            console.log('index',index);
            this.taskArr.splice(index,1);
        };

        this.editTask = function(item) {
            this.task = item;
            this.isEdit = true;
        };
    }

    angular.module('todo', [])
        .controller('tasksController', Tasks);
}());