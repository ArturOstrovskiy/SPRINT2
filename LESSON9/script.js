// DATA => C-R-U-D


const data = {
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
		const container = courseView(this.courseData)
		document.body.append(container);
	},
	createLesson(lessonTitle){
		//1. Change DATA
		const newLesson = {
			id: 6,
			title: lessonTitle,
			isDone: false
		}

		const newData = [...this.courseData.lessons, newLesson];
		this.courseData.lessons = newData;
		//2. Update view
		data.render();
	},
	updateLessonStatus(lessonID){
		//1. Change DATA immutable
		const newData = this.courseData.lessons.map(l => l.id === lessonID ? {...l, isDone: !l.isDone}: l);
		this.courseData.lessons = newData;
		// mutable
		// const lesson = this.courseData.lessons.find(l => l.id === lessonID)
		// lesson.isDone = !lesson.isDone;
		//2. Update view
		data.render();
	},
	deleteLesson(lessonID){
		//1. Change DATA
		const newData = this.courseData.lessons.filter(l => l.id !== lessonID);
		this.courseData.lessons = newData;
		//2. Update view
		data.render();
	}
}
function init(){
	data.render();
}
init();

function courseView(courseData) {
	//обертка (контейнер, wrapper)
	const container = document.createElement("div");

	//заголовок
	const title = 	createTitle(courseData.title)

	//messageBox
	const massageBox = document.createElement("div");
	massageBox.classList.add("massageBox")

	//форма
	const form = createForm(massageBox);

	//список
	const list =  createList(courseData.lessons)

	container.append(title,form,list,massageBox);
	return container;
}

function createTitle(courseDataTitle){
	const title = document.createElement("h1");
	title.setAttribute("id", "course-title");
	title.classList.add("title");
	title.textContent = courseDataTitle.title;

	return title;
}

function createList(lessons){
	const list = document.createElement("ul");
	list.classList.add("list");
	//элементы списка
	lessons.forEach((lesson) => {
		const listItem = document.createElement("li");
		listItem.classList.add("item");

		if (lesson.isDone === true) {
			listItem.classList.add("done");
		}
		listItem.textContent = lesson.title;
		list.addEventListener("click", () => {
			data.updateLessonStatus(lesson.id);
		})

		const delButton = document.createElement("button");
		delButton.textContent = 'x'

		delButton.addEventListener("click", (e) => {
			e.stopPropagation()
			data.deleteLesson(lesson.id);
		})
		list.append(delButton);

		list.append(listItem);
	})

	return list;
}

function createForm(massageBox){
	const form = document.createElement("form")
	form.innerHTML = `
	<input name = 'input' type = 'text' placeholder="Введите имя" required>
	<button  type="submit">Добавить</button>
	`
	form.addEventListener('submit', event => {
		event.preventDefault();
		const input = form.elements['input'];
		const value = input.value;


		massageBox.textContent = "Добавление курса";

		setTimeout(()=>{
			// massageBox.textContent = "";
			data.createLesson(value)
		}, 3000)
	})
return form;
}