
import boto3
import json




table_name = "hillel"
region_name = 'us-east-1'

# Initialize a session using Amazon DynamoDB
session = boto3.session.Session(region_name=region_name)
dynamodb = session.resource('dynamodb')

# Initialize DynamoDB Resource
table = dynamodb.Table(table_name)

# adding a row to the table
# table.put_item(
#             Item={
#                 'id': 'lavi',
#                 'age': 17,
#                 'lastName': 'lich'
#             }
#         )    

# table.delete_item(
#         Key={
#             'id': 'lavi'
#         }
#     )

def lookup_item(id):
    response = table.get_item(
        Key={
            'id': id
        }
    )
    item = response.get('Item')
    return item

# Example Usage:
id = 'lavi'
item = lookup_item(id)
print(item)