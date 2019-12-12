json.set! :todos do
  json.array! @todos do |task|
    json.extract! task, *task.attribute_names
  end
end
