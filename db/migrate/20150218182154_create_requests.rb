class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
    	t.string :email
    	t.boolean :email_sent
    	t.boolean :joined
    	t.timestamps null: false
    end
  end
end
