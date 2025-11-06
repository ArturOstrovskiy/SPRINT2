// DATA => C-U-R-D


const model = {
	courseData: {
		title:"Содержание курса",
		lessons:[
			{id:1 , title:"Введение в JavaScript" , isDone: true},
			{id:2 , title:"Операторы, сравнение, ветвление" , isDone: false},
			{id:3 , title:"Функции" , isDone: false},
			{id:4 , title:"Массивы" , isDone: false},
			{id:5 , title:"Объекты" , isDone: false},
		]
	},
	render(){
		//1. Remove previous view
		console.clear();
		//2. Create new view
		console.log(this.courseData);
	},
	createLesson(lessonTitle){
		//1. Change DATA
		const newLesson = {
			id: 6,
			title: lessonTitle,
			isDone: false
		}
		// mutable
		// this.courseData.lessons.push(newLesson);
		// immutable
		// const newData = this.courseData.lessons.concat(newLesson);
		const newData = [...this.courseData.lessons, newLesson];
		this.courseData.lessons = newData;
		//2. Update view
		model.render();
	},
	updateLessonStatus(lessonID){
		//1. Change DATA immutable
		const newData = this.courseData.lessons.map(l => l.id === lessonID ? {...l, isDone: !l.isDone}: l);
		this.courseData.lessons = newData;
		// mutable
		// const lesson = this.courseData.lessons.find(l => l.id === lessonID)
		// lesson.isDone = !lesson.isDone;
		//2. Update view
		model.render();
	},
	deleteLesson(lessonID){
		//1. Change DATA
		const newData = this.courseData.lessons.filter(l => l.id !== lessonID);
		this.courseData.lessons = newData;
		//2. Update view
		model.render();
	}
}

function init(){
	model.render();
}
init();