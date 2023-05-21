document.getElementById('input_file').addEventListener('click', (evt) => {
    evt.preventDefault()
    window.postMessage({
      type: 'select-dirs',
    })
  })