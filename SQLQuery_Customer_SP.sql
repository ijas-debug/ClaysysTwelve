USE SchoolDb;

CREATE TABLE Customer (
    CusId INT PRIMARY KEY,
    CusName VARCHAR(50),
    CusAge INT,
    CusPhone VARCHAR(15)
);

CREATE PROCEDURE SPI_Customer
    @CusId INT,
    @CusName VARCHAR(50),
    @CusAge INT,
    @CusPhone VARCHAR(15)
AS
BEGIN
    INSERT INTO customer (CusId, CusName, CusAge, CusPhone)
    VALUES (@CusId, @CusName, @CusAge, @CusPhone);
END;

EXEC SPI_Customer
    @CusId = 1,
    @CusName = 'John',
    @CusAge = 30,
    @CusPhone = '1234567890';

	select * from Customer;

EXEC SPI_Customer
    @CusId = 2,
    @CusName = 'Peter',
    @CusAge = 33,
    @CusPhone = '3234564890';

CREATE PROCEDURE SPU_Customer
    @CusId INT,
    @CusName VARCHAR(50),
    @CusAge INT,
    @CusPhone VARCHAR(15)
AS
BEGIN
    UPDATE customer
    SET CusName = @CusName,
        CusAge = @CusAge,
        CusPhone = @CusPhone
    WHERE CusId = @CusId;
END;


EXEC SPU_Customer
    @CusId = 1,
    @CusName = 'Harry',
    @CusAge = 30,
    @CusPhone = '1234567890';



CREATE PROCEDURE SPD_Customer
    @CusId INT
AS
BEGIN
    DELETE FROM customer
    WHERE CusId = @CusId;
END;

EXEC SPD_Customer
    @CusId = 2;


CREATE PROCEDURE SPS_Customers
AS
BEGIN
    SELECT * FROM customer;
END;

EXEC SPS_Customers;



EXEC SPI_Customer
    @CusId = 2,
    @CusName = 'Peter',
    @CusAge = 33,
    @CusPhone = '3234564890';

EXEC SPI_Customer
    @CusId = 3,
    @CusName = 'Tom',
    @CusAge = 33,
    @CusPhone = '3234564890';






CREATE PROCEDURE SP_CustomerCRUD
    @Action VARCHAR(10),
    @CusId INT = NULL,
    @CusName VARCHAR(50) = NULL,
    @CusAge INT = NULL,
    @CusPhone VARCHAR(15) = NULL
AS
BEGIN
    IF @Action = 'SPI_Insert'
    BEGIN
        INSERT INTO customer (CusId, CusName, CusAge, CusPhone)
        VALUES (@CusId, @CusName, @CusAge, @CusPhone);
    END;
    
    IF @Action = 'SPS_Select'
    BEGIN
        SELECT * FROM customer;
    END;
    
    IF @Action = 'SPU_Update'
    BEGIN
        UPDATE customer
        SET CusName = @CusName,
            CusAge = @CusAge,
            CusPhone = @CusPhone
        WHERE CusId = @CusId;
    END;
    
    IF @Action = 'SPD_Delete'
    BEGIN
        DELETE FROM customer
        WHERE CusId = @CusId;
    END;
END;




-- Create (Insert) Operation
EXEC SP_CustomerCRUD
    @Action = 'SPI_Insert',
    @CusId = 4,
    @CusName = 'Johny',
    @CusAge = 30,
    @CusPhone = '1234567890';

-- Read Operation
EXEC SP_CustomerCRUD
    @Action = 'SPS_Select';

-- Update Operation
EXEC SP_CustomerCRUD
    @Action = 'SPU_Update',
    @CusId = 4,
    @CusName = 'Adam',
    @CusAge = 35,
    @CusPhone = '9876543210';

-- Delete Operation
EXEC SP_CustomerCRUD
    @Action = 'SPD_Delete',
    @CusId = 4;
