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
		// console.clear();
		document.body.innerHTML = ``
		//2. Create new view
		console.log(this.courseData);
		const container = Course(this.courseData)
		document.body.append(container);
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

function Course(data) {
	const container = document.createElement("div");
	//заголовок
	const title = document.createElement("h1");
	title.setAttribute("id", "course-title");
	title.classList.add("title");
	title.textContent = data.title;
	//список
	const list = document.createElement("ul");
	title.classList.add("list");
  //элементы списка
	const lessons = data.lessons
	for (let i = 0; i < lessons.length; i++) {
		const lesson = lessons[i];
		const listItem = document.createElement("li");
		listItem.classList.add("item");
		listItem.textContent = lesson.title;
		if (lesson.isDone === true) {
			listItem.classList.add("done");
		}
		listItem.textContent = lesson.title;
	const deleteBtn = document.createElement("button");
		deleteBtn.textContent = 'x'
	list.append(deleteBtn);
	list.append(listItem);
	}

	container.append(title,list);
	return container;

}
