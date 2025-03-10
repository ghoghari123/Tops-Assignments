-- 20. PL/SQL Syntax
--  Lab 3: Write a PL/SQL block to declare variables for book_id and price, assign values, and display the results.
--  Lab 4: Write a PL/SQL block using constants and perform arithmetic operations on book prices.


declare 
	book_id number := 101;
	price number := 299;
begin
	dbms_output.put_line('Book Id : '||book_id);
	dbms_output.put_line('Book Price : '||price);
end;




declare 
    discount constant number := 50;
	tax_rate constant number := 0.18;
	price number := 299;
	final_price number;
begin
    final_price := price - discount;
	final_price := final_price + (final_price * tax_rate);
	dbms_output.put_line('Origanl Book Price : '||price);
	dbms_output.put_line('Discount : '||discount);
	dbms_output.put_line('Price After Discount : '||(price - discount));
	dbms_output.put_line('Final Price After Tax : '||final_price);
end;