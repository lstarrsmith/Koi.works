class User < ActiveRecord::Base
	self.has_secure_password
	self.has_many(:memberships)
	self.has_many(:groups, {through: :memberships})

end