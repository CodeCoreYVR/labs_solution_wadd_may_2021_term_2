-- Create a student record with the following attributes: first_name: John, last_name: Smith, Age: 45, email: john@smith.com registration_date: January 1st 2016, phone_number: 778.778.7787
insert 
    into students
        (first_name, last_name, age, email, registration_date, phone_number) 
    values 
        ('John', 'Smith', 45, 'john@smith.com', '2016-01-01' ,'778.778.7787');

-- Select that student from the database by fetching the last record
select * from students order by id desc limit 1;
-- Using the id you fetched from the previous exercise, update the age of that record to become 50
update students
    set age = 50
where id = (select id from students order by id desc limit 1);

-- Delete that record using its id
delete from students where id = (select id from students order by id desc limit 1);
