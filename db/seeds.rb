# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Group.delete_all
Membership.delete_all


logan = User.create({fname: "Logan", lname: "Smith", city: "Brooklyn", state: "NY", phone: 5127754971, email: "logan@gmail.com", age: 24, admin: true, password: "demo"})
mack = User.create({fname: "Mackenzie", lname: "Alexander", city: "Brooklyn", state: "NY", phone: 8042243555, email: "mack@gmail.com", age: 25, admin: false, password: "demo"})
jennifer = User.create({fname: "Jennifer", lname: "Smith", city: "Austin", state: "TX", phone: 5122282552, email: "jennifer@gmail.com", age: 54, admin: false, password: "demo"})
gail = User.create({fname: "Gail", lname: "Swisher", city: "Austin", state: "TX", phone: 5122282552, email: "gail@gmail.com", age: 54, admin: false, password: "demo"})
sally = User.create({fname: "Sally", lname: "Jones", city: "Brooklyn", state: "NY", phone: 5122282552, email: "sally@gmail.com", age: 54, admin: false, password: "demo"})


foxes = Group.create({name: "Foxes", city: "Brooklyn", state: "NY"})
sherpas = Group.create({name: "Sherpas", city: "Austin", state: "TX"})

membership_1 = Membership.create({group_id: 1, user_id: 2})
membership_2 = Membership.create({group_id: 2, user_id: 3})
membership_3 = Membership.create({group_id: 1, user_id: 5})
membership_4 = Membership.create({group_id: 2, user_id: 4})


