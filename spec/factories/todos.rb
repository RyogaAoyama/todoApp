FactoryBot.define do
  factory :todo do
    sequence(:name) { |idx| "todo#{ idx }" }
    is_done { false }
  end
end
