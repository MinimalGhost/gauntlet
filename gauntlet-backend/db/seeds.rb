# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed Companies
5.times do
  Company.create(name: Faker::Company.name)
end

# Eric interviews
Interview.create(contact: Faker::Name.name, format: 'Tech Screen', round: 1, user_id: 1, company_id: 1)
Interview.create(contact: Faker::Name.name, format: 'Tech Screen', round: 2, user_id: 1, company_id: 1)
Interview.create(contact: Faker::Name.name, format: 'Tech Screen', round: 3, user_id: 1, company_id: 1)

# Interactions first round interview company.id:1
Interaction.create(question: 'some question 1', answer: 'some answer 1', interview_id: 1)
Interaction.create(question: 'some question 2', answer: 'some answer 2', interview_id: 1)
Interaction.create(question: 'some question 3', answer: 'some answer 3', interview_id: 1)
Interaction.create(question: 'some question 4', answer: 'some answer 4', interview_id: 1)

# Algorithm second round interview company.id:1
Algorithm.create(problem: 'recursive algorithm problem', solution: 'recursive algorithm solution On^2', interview_id: 2)
