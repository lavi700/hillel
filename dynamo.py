import boto3
import json

table_name = "hillel"
region_name = 'us-east-1'

# Initialize a session using Amazon DynamoDB
session = boto3.session.Session(region_name=region_name)
dynamodb = session.resource('dynamodb')

# Initialize DynamoDB Resource
table = dynamodb.Table(table_name)

# Function to add a row to the table
def add_item(id, age, last_name):
    table.put_item(
        Item={
            'id': id,
            'age': age,
            'lastName': last_name
        }
    )

# Function to look up an item by ID
def lookup_item(id):
    response = table.get_item(
        Key={
            'id': id
        }
    )
    item = response.get('Item')
    return item

# Function to retrieve all items in the table
def get_all_items():
    response = table.scan()
    items = response.get('Items', [])
    return items

# Function to delete an item by ID
def delete_item(id):
    table.delete_item(
        Key={
            'id': id
        }
    )
    print(f"Item with ID {id} deleted.")

# Function to delete all items in the table
def delete_all_items():


    all_items = get_all_items()
    for item in all_items:
        table.delete_item(
            Key={
                'id': item['id']
            }
        )
    print("All items deleted.")




    print(item)

add_item('lavi',100,'lichten')

for item in get_all_items():
    print(item)
