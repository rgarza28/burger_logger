
USE burgers_db;

INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("Bacon Burger", false),
    ("Breakfast Burger", false),
    ("Double Meat Brisket Burger", True),
    ("Beyond Burger", false),
    ("Bacon Ranch Burger", false);

SELECT *
FROM burgers;