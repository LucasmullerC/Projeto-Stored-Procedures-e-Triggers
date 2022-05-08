USE Northwind
GO

CREATE PROCEDURE CadastrarCliente
	@CustomerID nchar(5),
	@CompanyName nvarchar (40),
	@ContactName nvarchar(30),
	@ContactTitle nvarchar(30),
	@Address nvarchar(60),
	@City nvarchar(15),
	@Region nvarchar(15),
	@PostalCode nvarchar(10),
	@Phone nvarchar(24),
	@Fax nvarchar(24)
AS
BEGIN
	INSERT INTO Customers (CustomerID,CompanyName,ContactName,ContactTitle,Address,City,Region,PostalCode,Phone,Fax) VALUES (@CustomerID,@CompanyName,@ContactName,@ContactTitle,@Address,@City,@Region,@PostalCode,@Phone,@Fax)
END;
GO

EXEC CadastrarCliente 'EUVIN','Liferay','Vinicius','QA','Rua da felicidade','RJ','BR','90810200','99876532','34478960';

CREATE PROCEDURE CadastrarProduto
	@ProductName nvarchar (40),
	@SupplierID int,
	@CategoryID int,
	@QuantityPerUnit nvarchar(20),
	@UnitPrice money,
	@UnitsInStock smallint,
	@UnitsOnOrder smallint,
	@ReorderLevel smallint,
	@Discontinued bit
AS
BEGIN
	INSERT INTO Products(ProductName,SupplierID,CategoryID,QuantityPerUnit,UnitPrice,UnitsInStock,UnitsOnOrder,ReorderLevel,Discontinued) VALUES (@ProductName,@SupplierID,@CategoryID,@QuantityPerUnit,@UnitPrice,@UnitsInStock,@UnitsOnOrder,@ReorderLevel,@Discontinued)
END;
GO

EXEC CadastrarProduto 'biscoito','1','1','10 boxes','25','10','0','0','0';

CREATE PROCEDURE DeletarProduto
	@ProductID int
AS
BEGIN
	DELETE FROM Products where ProductID = @ProductID
END;
GO

EXEC DeletarProduto 79;

CREATE PROCEDURE AtualizarProduto
	@ProductID int,
	@UnitPrice money,
	@UnitsInStock smallint
AS
BEGIN
	UPDATE Products
	Set UnitPrice = @UnitPrice,
	UnitsInStock = @UnitsInStock
	where ProductID = @ProductID;
END;
GO

EXEC AtualizarProduto 1,26.00,45;

CREATE TRIGGER atualiza_estoque
ON [Order Details]
FOR INSERT
AS
BEGIN
    DECLARE
    @ProductID  int,
    @Quantity smallint

    SELECT @Quantity = Quantity, @ProductID = ProductID FROM INSERTED

    UPDATE Products SET UnitsInStock = UnitsInStock - @Quantity
    WHERE ProductID = @ProductID
END
GO