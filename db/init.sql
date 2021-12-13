CREATE TABLE task(
  Id serial PRIMARY KEY,
  title varchar(50) UNIQUE,
  description varchar(255)
);



UPDATE task SET title= 'a', description= 'b' WHERE Id= 2 RETURNING *;