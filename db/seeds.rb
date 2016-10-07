# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.destroy_all

User.all.each do |u|
  3.times do
    u.boards.create(name: Faker::Company.name)
  end
end

Board.all.each do |b|
  5.times do
    b.lists.create(name: Faker::Space.nebula, description: Faker::Lorem.paragraph)
  end
end