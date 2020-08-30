import express from 'express';

const app = express();

app.get('/' , (request, response) => {
  return response.json({ message: 'Hello GooStack '});
});

app.listen(3333, () => {
  console.log('🚀 Server started on part 3333!')
});
