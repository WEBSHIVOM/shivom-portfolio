document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('appointment-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const lines = [
    `Session type: ${data.get('topic')}`,
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Preferred date or time: ${data.get('availability') || 'Flexible'}`,
    '',
    'Context:',
    data.get('message') || 'Not provided',
  ];
  const subject = encodeURIComponent(`Portfolio session request: ${data.get('topic')}`);
  const body = encodeURIComponent(lines.join('\n'));
  window.location.href = `mailto:shivompandey636@gmail.com?subject=${subject}&body=${body}`;
});
