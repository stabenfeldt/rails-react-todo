json.extract! todo, :id, :text, :user_id, :created_at, :updated_at
json.url todo_url(todo, format: :json)