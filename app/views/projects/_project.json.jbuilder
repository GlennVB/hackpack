json.extract! project, :id, :name, :image, :punchline, :description, :status, :owner_id, :assignee_id, :parent_id, :difficulity
json.url project_url(project, format: :json)
json.children project.children.each do |child|
  puts "Rendering #{child.name}"
  json.partial! "projects/project", project: child
  json.name child.name
end