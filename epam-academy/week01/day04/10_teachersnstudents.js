class student{
    learn(){
        console.log('stu is learning sth new')
    }

    question(teacher){
        teacher.answer()
    }
}

class teacher{
    teach(student){
        student.learn()
    }

    answer(){
        console.log('i am answering the question')
    }
}

objs = new student
objt = new teacher

objs.question(objt)
objt.teach(objs)