const Student = document.getElementById('StudentButton')
const Teacher = document.getElementById('TeacherButton')

Student.addEventListener('click', function(event){
    window.location.replace('/student-dashboard.html')
})
Teacher.addEventListener('click', function(event){
    window.location.replace('/author-dashboard.html')
})