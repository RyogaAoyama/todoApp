json.set! :todo do
  json.extract! @todo, *@todo.attribute_names
end
