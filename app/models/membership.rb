class Membership < ActiveRecord::Base
	self.belongs_to(:user)
	self.belongs_to(:group)
end