
CREATE PROCEDURE dbo.ManageUserone
    @Action VARCHAR(10),
    @Id INT = NULL,
    @FirstName VARCHAR(255) = NULL,
    @LastName VARCHAR(255) = NULL,
    @DateOfBirth DATE = NULL,
    @Age INT = NULL,
    @Gender VARCHAR(10) = NULL,
    @PhoneNumber VARCHAR(15) = NULL,
    @Email VARCHAR(255) = NULL,
    @Address VARCHAR(255) = NULL,
    @State VARCHAR(50) = NULL,
    @City VARCHAR(50) = NULL,
    @Username VARCHAR(50) = NULL,
    @Password VARCHAR(50) = NULL
AS
BEGIN
    IF @Action = 'CREATE'
    BEGIN
        INSERT INTO dbo.Userone (FirstName, LastName, DateOfBirth, Age, Gender, PhoneNumber, Email, Address, State, City, Username, Password)
        VALUES (@FirstName, @LastName, @DateOfBirth, @Age, @Gender, @PhoneNumber, @Email, @Address, @State, @City, @Username, @Password);
    END
    ELSE IF @Action = 'READ'
    BEGIN
        SELECT * FROM dbo.Userone WHERE Id = @Id;
    END
    ELSE IF @Action = 'UPDATE'
    BEGIN
        UPDATE dbo.Userone
        SET FirstName = @FirstName,
            LastName = @LastName,
            DateOfBirth = @DateOfBirth,
            Age = @Age,
            Gender = @Gender,
            PhoneNumber = @PhoneNumber,
            Email = @Email,
            Address = @Address,
            State = @State,
            City = @City,
            Username = @Username,
            Password = @Password
        WHERE Id = @Id;
    END
    ELSE IF @Action = 'DELETE'
    BEGIN
        DELETE FROM dbo.Userone WHERE Id = @Id;
    END
END;
