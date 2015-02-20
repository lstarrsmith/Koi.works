class Group < ActiveRecord::Base

	self.has_many(:memberships)
	self.has_many(:users, {through: :memberships})
end