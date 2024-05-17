import boto3
import json

table_name = "hillel"
region_name = 'us-east-1'

# Initialize a session using Amazon DynamoDB
session = boto3.session.Session(region_name=region_name)
dynamodb = session.resource('dynamodb')

# Initialize DynamoDB Resource
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    # Check the HTTP method to determine the action
    http_method = event['httpMethod']
    
    if http_method == 'GET':
        # Check if the request is for a single item or all items
        item_id = event['queryStringParameters'].get('id')
        if item_id:
            # Call the lookup_item function for a single item
            result = lookup_item(item_id)
        else:
            # Call the get_all_items function for all items
            result = get_all_items()

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*'  # Add CORS header
            },
            'body': json.dumps(result)
        }
    elif http_method == 'DELETE':
        # Check if the request is for a single item or all items
        item_id = event['queryStringParameters'].get('id')
        if item_id:
            # Call the delete_item function for a single item
            delete_item(item_id)
            return {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Origin': '*'  # Add CORS header
                },
                'body': json.dumps({'message': f'Item with ID {item_id} deleted'})
            }
        else:
            # Call the delete_all_items function for all items
            delete_all_items()
            return {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Origin': '*'  # Add CORS header
                },
                'body': json.dumps({'message': 'All items deleted'})
            }
    else:
        return {
            'statusCode': 400,
            'headers': {
                'Access-Control-Allow-Origin': '*'  # Add CORS header
            },
            'body': json.dumps({'message': 'Unsupported HTTP method'})
        }

def lookup_item(id):
    # Your existing lookup_item logic
    response = table.get_item(
        Key={
            'id': id
        }
    )
    item = response.get('Item')
    return item

def get_all_items():
    # Your existing get_all_items logic
    response = table.scan()
    items = response.get('Items', [])
    return items

def delete_item(id):
    # Your existing delete_item logic
    table.delete_item(
        Key={
            'id': id
        }
    )
    print(f"Item with ID {id} deleted.")

def delete_all_items():
    # Your existing delete_all_items logic
    all_items = get_all_items()
    for item in all_items:
        table.delete_item(
            Key={
                'id': item['id']
            }
        )
    print("All items deleted.")
