

insert into User values(1,'can','can@gmail.com');

insert into User values(2,'okan','okan@gmail.com');


insert into Category values(1,'IT / telecom');

insert into Category values(2,'Security');

insert into Category values(3,'Tourism / Food / Service');

insert into WORKING_TYPE(ID,WORKING_TYPE,WORKING_HOUR) values(1,'Full Time ',9);

insert into WORKING_TYPE(ID,WORKING_TYPE,WORKING_HOUR) values(2,'Part Time ',4);


insert into WORKING_TYPE(ID,WORKING_TYPE,WORKING_HOUR) values(3,'Intern ',12);


insert into ADVERTISEMENT(Id,descript, START_DATE, END_DATE,location,CATEGORY_ID,USER_ID,WORKING_TYPE_ID)  values(1,'Software Developer',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'New york',1,1,1);
insert into ADVERTISEMENT(ID,descript, START_DATE, END_DATE,location,CATEGORY_ID,USER_ID,WORKING_TYPE_ID) values(2,'Daily Waiter',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'Los Angeles',3,2,2);




