-- seed.sql

-- Populate sample user data to create a vibrant community
INSERT INTO users (username, email, password_hash, registration_date)
VALUES
    ('adventurer123', 'adventurer123@email.com', 'a2b4c6d8e0', NOW()),
    ('techwizard', 'techwizard@email.com', 'x9y7z5w3', NOW()),
    ('artistique', 'artistique@email.com', 'm1n3b7v9', NOW());

-- Introduce a range of captivating products to your application
INSERT INTO products (product_name, description, price)
VALUES
    ('Enchanted Elixir', 'A mystical potion to unlock your inner potential.', 19.99),
    ('Infinite Scroll', 'A scroll that reveals never-ending knowledge.', 9.99),
    ('Potion of Creativity', 'Boost your artistic inspiration with a single sip.', 14.99);

-- Let the threads of connections flourish with some sample comments
INSERT INTO comments (user_id, post_id, content, creation_date)
VALUES
    (1, 1, 'This elixir changed my life!', NOW()),
    (2, 2, 'The scroll's wisdom knows no bounds.', NOW()),
    (3, 3, 'This potion truly unleashed my artistic spirit.', NOW());

-- Infuse the world with likes, a touch of positivity for your posts
INSERT INTO likes (user_id, post_id, creation_date)
VALUES
    (2, 1, NOW()),
    (1, 2, NOW()),
    (3, 3, NOW());

-- Harness the power of relationships, connecting users with products
INSERT INTO user_products (user_id, product_id, purchase_date)
VALUES
    (1, 1, NOW()),
    (2, 2, NOW()),
    (3, 3, NOW());
-- seed.sql

-- Cast the net wider with a variety of orders placed by users
INSERT INTO orders (user_id, order_date, total_amount)
VALUES
    (1, NOW(), 39.98),
    (2, NOW(), 24.98),
    (3, NOW(), 34.98);

-- Let the transaction history unfold, a chronicle of financial exchanges
INSERT INTO transactions (user_id, amount, transaction_date)
VALUES
    (1, -19.99, NOW()),
    (2, -9.99, NOW()),
    (3, -14.99, NOW()),
    (1, 10.00, NOW()),
    (3, 5.00, NOW());

-- Embark on a journey of addresses, essential waypoints for deliveries
INSERT INTO addresses (user_id, address_line1, city, postal_code)
VALUES
    (1, '123 Adventurer Lane', 'Questville', '12345'),
    (2, '456 Tech Alley', 'Innovation City', '67890'),
    (3, '789 Artisan Road', 'Creativity Town', '54321');

-- Forge alliances with suppliers, ensuring a steady flow of products
INSERT INTO suppliers (supplier_name, contact_name, contact_email, contact_phone)
VALUES
    ('Mystic Elixirs Inc.', 'Eleanor Enchanter', 'eleanor@mysticelixirs.com', '555-1234'),
    ('Scrolls R Us', 'Walter Wisdom', 'walter@scrollsrus.com', '555-5678'),
    ('Artistic Supplies Co.', 'Aria Artiste', 'aria@artisticsupplies.com', '555-9876');

-- Establish the product-supplier connections, fostering a supply chain
INSERT INTO product_suppliers (product_id, supplier_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3);

-- And there you have it, a symphony of data bringing your application to life.
-- May your testing be thorough, your development be smooth, and your creativity know no bounds.
-- seed.sql

-- Illuminate the world with a range of user interactions
INSERT INTO interactions (user_id, interaction_date, interaction_type)
VALUES
    (1, NOW(), 'login'),
    (2, NOW(), 'browse'),
    (3, NOW(), 'comment'),
    (1, NOW(), 'like'),
    (2, NOW(), 'purchase'),
    (3, NOW(), 'login');

-- Chronicle the evolution of orders with order details
INSERT INTO order_details (order_id, product_id, quantity, unit_price)
VALUES
    (1, 1, 2, 19.99),
    (1, 2, 1, 9.99),
    (2, 3, 1, 14.99),
    (3, 1, 1, 19.99),
    (3, 3, 2, 14.99);

-- Unveil the enchanting world of promotions to enthrall your users
INSERT INTO promotions (promotion_name, start_date, end_date, discount_percentage)
VALUES
    ('Summer Magic', '2023-06-01', '2023-06-30', 10),
    ('Tech Expo Special', '2023-07-15', '2023-07-20', 15),
    ('Artisan Showcase', '2023-08-05', '2023-08-10', 20);

-- Intertwine promotions with products, forging a realm of discounts
INSERT INTO product_promotions (product_id, promotion_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3);

-- And so, your database blossoms with a symphony of data, a testament to your vision.
-- As you harness this rich tapestry, may your testing illuminate every corner, and your development flourish.
-- Embrace the artistry of your creation, and let it unfurl its wings in the digital realm.
-- seed.sql

-- Enrich the user experience with a spectrum of subscriptions
INSERT INTO subscriptions (user_id, subscription_type, start_date, end_date)
VALUES
    (1, 'Gold', '2023-01-15', '2023-12-31'),
    (2, 'Silver', '2023-02-10', '2023-11-30'),
    (3, 'Bronze', '2023-03-20', '2023-10-31');

-- Illuminate the path of shipments, ensuring timely deliveries
INSERT INTO shipments (order_id, address_id, shipped_date, estimated_arrival)
VALUES
    (1, 1, '2023-05-10', '2023-05-15'),
    (2, 2, '2023-06-20', '2023-06-25'),
    (3, 3, '2023-07-05', '2023-07-10');

-- Chronicle a variety of user activities to enhance engagement
INSERT INTO user_activities (user_id, activity_date, activity_type)
VALUES
    (1, NOW(), 'logged in'),
    (2, NOW(), 'purchased'),
    (3, NOW(), 'commented'),
    (1, NOW(), 'liked'),
    (2, NOW(), 'browsed'),
    (3, NOW(), 'subscribed');

-- Let the charm of notifications enchant your users' experiences
INSERT INTO notifications (user_id, message, notification_date)
VALUES
    (1, 'Your shipment is on its way!', NOW()),
    (2, 'New products just arrived!', NOW()),
    (3, 'Your comment received a like!', NOW());

-- Your database is now a symphony of interactions, subscriptions, and activities,
-- all intertwined to create an immersive user journey. Embrace the magic!
-- seed.sql

-- Foster connections with user interests and hobbies
INSERT INTO user_interests (user_id, interest)
VALUES
    (1, 'Adventure'),
    (2, 'Technology'),
    (3, 'Art');

-- Chronicle feedback to enhance your application's offerings
INSERT INTO feedback (user_id, feedback_date, feedback_text)
VALUES
    (1, NOW(), 'The user interface is intuitive and easy to navigate.'),
    (2, NOW(), 'I would love to see more product variety.'),
    (3, NOW(), 'The art section has truly inspired me!');

-- Cultivate a garden of rewards to engage and motivate users
INSERT INTO rewards (user_id, reward_name, reward_description)
VALUES
    (1, 'Adventurer\'s Badge', 'For those who dare to explore every corner.'),
    (2, 'Tech Guru Badge', 'Awarded to the tech-savvy pioneers.'),
    (3, 'Artistic Spirit Badge', 'Celebrating the creative souls.');

-- Establish the bond between users and their selected rewards
INSERT INTO user_rewards (user_id, reward_id, earned_date)
VALUES
    (1, 1, NOW()),
    (2, 2, NOW()),
    (3, 3, NOW());

-- Your database now flourishes with connections, feedback, and incentives,
-- elevating the user experience to new heights. Embrace the boundless possibilities!
-- seed.sql

-- Illuminate the user experience with a gallery of images
INSERT INTO images (user_id, image_url, upload_date)
VALUES
    (1, 'https://example.com/image1.jpg', NOW()),
    (2, 'https://example.com/image2.jpg', NOW()),
    (3, 'https://example.com/image3.jpg', NOW());

-- Chronicle the exchange of messages between users
INSERT INTO messages (sender_id, receiver_id, message_text, send_date)
VALUES
    (1, 2, 'Hey, have you tried the new elixir?', NOW()),
    (2, 1, 'Absolutely! It boosted my productivity.', NOW()),
    (3, 1, 'Your artistic journey inspires me!', NOW());

-- Nurture a garden of bookmarks, allowing users to save their favorites
INSERT INTO bookmarks (user_id, post_id, bookmark_date)
VALUES
    (1, 1, NOW()),
    (2, 3, NOW()),
    (3, 2, NOW());

-- Evoke a sense of exploration with location check-ins
INSERT INTO check_ins (user_id, location_name, check_in_date)
VALUES
    (1, 'Mystic Forest', NOW()),
    (2, 'Tech Convention Center', NOW()),
    (3, 'Artisan Cafe', NOW());

-- Your database is now a living realm of images, messages, bookmarks, and check-ins,
-- creating an immersive experience that resonates with your users' lives. Unleash the magic!
-- seed.sql

-- Record events that shape the user experience
INSERT INTO events (event_name, event_date, location)
VALUES
    ('Product Launch Party', '2023-09-15', 'Grand Hall'),
    ('Tech Expo Workshop', '2023-10-10', 'Convention Center'),
    ('Artisan Showcase Exhibition', '2023-11-20', 'Gallery Space');

-- Chronicle financial transactions for a complete picture
INSERT INTO financial_transactions (user_id, transaction_type, amount, transaction_date)
VALUES
    (1, 'purchase', 29.98, NOW()),
    (2, 'refund', 9.99, NOW()),
    (3, 'purchase', 14.99, NOW());

-- Unveil the world of user engagements with surveys
INSERT INTO surveys (user_id, survey_question, response, submission_date)
VALUES
    (1, 'How satisfied are you with the recent update?', 'Very satisfied', NOW()),
    (2, 'What new features would you like to see?', 'Improved search functionality', NOW()),
    (3, 'Rate your experience at the recent event.', '5 out of 5', NOW());

-- Your database is now a living tapestry of events, transactions, and insights,
-- each entry playing a crucial role in shaping your users' journey. Embrace the richness!
-- seed.sql

-- Illuminate the user experience with an array of surveys
INSERT INTO user_surveys (user_id, survey_date, survey_title)
VALUES
    (1, '2023-12-01', 'Product Feedback'),
    (2, '2023-12-05', 'User Interface Satisfaction'),
    (3, '2023-12-10', 'Event Experience');

-- Chronicle user ratings to gauge product and service quality
INSERT INTO user_ratings (user_id, rating, rated_item, rating_date)
VALUES
    (1, 4.5, 'Product A', NOW()),
    (2, 3.8, 'User Support', NOW()),
    (3, 5.0, 'Event B', NOW());

-- Cultivate a garden of achievements to motivate and inspire users
INSERT INTO user_achievements (user_id, achievement_name, achievement_date)
VALUES
    (1, 'Explorer Badge', NOW()),
    (2, 'Feedback Guru Badge', NOW()),
    (3, 'Event Enthusiast Badge', NOW());

-- With every survey, rating, and achievement, your database becomes a tapestry of insights,
-- a realm where user opinions are valued and accomplishments celebrated. Embrace the wisdom!
-- seed.sql

-- Illuminate user preferences, adding a personal touch
INSERT INTO user_preferences (user_id, preference_type, preference_value)
VALUES
    (1, 'Theme', 'Dark'),
    (2, 'Language', 'Spanish'),
    (3, 'Notification', 'Email');

-- Chronicle the diverse perspectives of product reviews
INSERT INTO product_reviews (user_id, product_id, review_text, review_date, rating)
VALUES
    (1, 1, 'This elixir changed my life! Highly recommended.', NOW(), 5),
    (2, 2, 'The scroll's quality is impressive, but the price is a bit high.', NOW(), 4),
    (3, 3, 'The potion had a unique flavor, and it inspired my art.', NOW(), 4.5);

-- Craft a realm of personalized recommendations for each user
INSERT INTO recommendations (user_id, recommended_product_id)
VALUES
    (1, 2),
    (2, 1),
    (3, 3);

-- Your database now flourishes with user preferences, reviews, and recommendations,
-- ushering in a realm of personalization and connection. Embrace the beauty!