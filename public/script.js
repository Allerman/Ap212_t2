const deleteButtons = document.querySelectorAll('.delete-btn');
const checkboxes = document.querySelectorAll('.check-item');

  deleteButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const itemId = button.getAttribute('data-id');
      try {
        const response = await axios.delete(`/deletar/${itemId}`);
        console.log(response.data.message);
        location.reload();
      } catch (error) {
        console.error(error);
      }
    });
  });

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', async () => {
      const itemId = checkbox.getAttribute('data-id');
      try {
        await axios.put(`/atualizar/${itemId}`, { check: checkbox.checked });
      } catch (error) {
        console.error(error);
      }
    });
  });