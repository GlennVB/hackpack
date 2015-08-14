json.array!(@projects) do |project|
  json.extract! project, :id, :name, :image, :punchline, :description, :status, :owner_id, :assignee_id, :parent_id, :difficulity
  json.url project_url(project, format: :json)
end
