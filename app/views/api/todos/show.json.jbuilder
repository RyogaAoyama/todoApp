json.set! :todo do
  json.extract! @task, *@task.attribute_names
end
