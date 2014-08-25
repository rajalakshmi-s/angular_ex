class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.string :description
      t.string :author
      t.string :expire_date

      t.timestamps
    end
  end
end
