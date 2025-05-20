document.getElementById('commentForm').addEventListener('submit', function (e) {
  e.preventDefault()
  const name = document.getElementById('name').value
  const comment = document.getElementById('comment').value

  const commentBox = document.createElement('div')
  commentBox.classList.add('entry')
  commentBox.innerHTML = `<strong>${name}</strong><p>${comment}</p>`

  document.getElementById('commentSection').prepend(commentBox)

  this.reset()
})
