class CreateMemberships < ActiveRecord::Migration
  def change
   	 create_table :users do |t|
      t.string :fname
      t.string :lname
      t.string :city
      t.string :state
      t.string :phone
      t.string :email
      t.integer :age
      t.string :picture
      t.boolean :admin
      t.string :password_digest
      t.timestamps null: false
    end

    create_table :groups do |t|
      t.string :name
      t.string :city
      t.string :state
      t.string :picture
      t.datetime :start_date
      t.datetime :end_date
      t.timestamps null: false
    end

    create_table :memberships do |t|
      t.belongs_to :user, index: true
      t.belongs_to :group, index: true
      t.integer :group_id
      t.integer :user_id
      t.timestamps null: false
    end
  end
end
