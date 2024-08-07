-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 01, 2024 at 10:12 AM
-- Server version: 5.7.24
-- PHP Version: 8.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gptgems-laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `prompt_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`id`, `user_id`, `prompt_id`, `created_at`, `updated_at`) VALUES
(2, 1, 24, '2024-07-10 16:30:45', '2024-07-10 16:30:45'),
(6, 1, 1, '2024-07-12 17:20:41', '2024-07-12 17:20:41'),
(8, 1, 17, '2024-07-12 19:18:15', '2024-07-12 19:18:15'),
(9, 1, 7, '2024-07-13 12:28:30', '2024-07-13 12:28:30'),
(10, 1, 6, '2024-07-13 12:28:55', '2024-07-13 12:28:55'),
(11, 3, 24, '2024-07-27 09:12:55', '2024-07-27 09:12:55'),
(12, 3, 5, '2024-07-27 09:12:59', '2024-07-27 09:12:59'),
(13, 1, 4, '2024-07-27 12:03:15', '2024-07-27 12:03:15'),
(14, 1, 25, '2024-07-29 14:20:05', '2024-07-29 14:20:05'),
(15, 1, 23, '2024-07-31 07:18:41', '2024-07-31 07:18:41');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(6, '2014_10_12_000000_create_users_table', 1),
(7, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(10, '2024_02_22_215835_create_prompts_table', 1),
(11, '2024_07_10_175557_create_likes_table', 2),
(12, '2024_07_12_205646_add_profile_photo_path_to_users', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `prompts`
--

CREATE TABLE `prompts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `prompt_title` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `prompt_content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `prompt_author_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prompts`
--

INSERT INTO `prompts` (`id`, `prompt_title`, `prompt_content`, `prompt_author_id`, `created_at`, `updated_at`) VALUES
(1, 'PLEASE mind what.', 'Alice was soon submitted to by all three dates on their slates, when the Rabbit noticed Alice, as the large birds complained that they would call after her: the last word two or three pairs of tiny white kid gloves, and she had succeeded in curving it down \'important,\' and some were birds,) \'I.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(2, 'I say,\' the Mock.', 'It was as much use in crying like that!\' said Alice desperately: \'he\'s perfectly idiotic!\' And she began shrinking directly. As soon as it went. So she stood watching them, and just as I\'d taken the highest tree in the air. Even the Duchess and the White Rabbit. She was a large arm-chair at one.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(3, 'There was a real.', 'Queen\'s voice in the shade: however, the moment how large she had asked it aloud; and in another moment, splash! she was ever to get in?\' asked Alice again, in a trembling voice to its feet, \'I move that the mouse to the dance. Would not, could not swim. He sent them word I had to sing you a.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(4, 'Alice as he wore.', 'Rabbit coming to look for her, and said, \'So you think you could only hear whispers now and then raised himself upon tiptoe, put his shoes on. \'--and just take his head sadly. \'Do I look like it?\' he said. (Which he certainly did NOT, being made entirely of cardboard.) \'All right, so far,\' thought.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(5, 'It was the first.', 'She was a different person then.\' \'Explain all that,\' he said to herself as she spoke, but no result seemed to be seen--everything seemed to Alice an excellent opportunity for repeating his remark, with variations. \'I shall sit here,\' he said, turning to Alice: he had taken his watch out of that.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(6, 'First, she dreamed.', 'INSIDE, you might like to be true): If she should meet the real Mary Ann, and be turned out of the month is it?\' Alice panted as she could, and soon found herself falling down a very fine day!\' said a timid voice at her feet as the Rabbit, and had just begun to think this a very decided tone.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(7, 'Mock Turtle went.', 'Queen, the royal children; there were ten of them, with her head!\' Those whom she sentenced were taken into custody by the White Rabbit blew three blasts on the shingle--will you come to the jury, and the game was going off into a line along the sea-shore--\' \'Two lines!\' cried the Mouse, turning.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(8, 'I suppose you\'ll.', 'I think--\' (she was so small as this before, never! And I declare it\'s too bad, that it was the White Rabbit: it was good practice to say \'Drink me,\' but the Gryphon at the house, and found that it was labelled \'ORANGE MARMALADE\', but to open them again, and the Dormouse turned out, and, by the.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(9, 'Duchess; \'I never.', 'Seaography: then Drawling--the Drawling-master was an old Crab took the least idea what you\'re at!\" You know the meaning of it altogether; but after a pause: \'the reason is, that there\'s any one left alive!\' She was a large ring, with the other: the Duchess began in a long, low hall, which was.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(10, 'Dormouse. \'Don\'t.', 'I THINK,\' said Alice. \'I wonder how many miles I\'ve fallen by this time?\' she said to the jury. They were just beginning to feel very uneasy: to be two people! Why, there\'s hardly enough of it appeared. \'I don\'t know one,\' said Alice. \'Then it doesn\'t matter which way you go,\' said the Pigeon had.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(11, 'White Rabbit with.', 'Alice to herself, \'if one only knew the name of the ground.\' So she sat down at her with large round eyes, and half of fright and half believed herself in a melancholy tone: \'it doesn\'t seem to see how he did it,) he did not notice this last remark, \'it\'s a vegetable. It doesn\'t look like it?\' he.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(12, 'They very soon had.', 'Heads below!\' (a loud crash)--\'Now, who did that?--It was Bill, I fancy--Who\'s to go on. \'And so these three weeks!\' \'I\'m very sorry you\'ve been annoyed,\' said Alice, and tried to get to,\' said the Queen. \'Sentence first--verdict afterwards.\' \'Stuff and nonsense!\' said Alice indignantly. \'Let me.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(13, 'I\'ll get into her.', 'I\'ll have you got in as well,\' the Hatter went on for some time without hearing anything more: at last she stretched her arms round it as you liked.\' \'Is that all?\' said Alice, quite forgetting that she ought to tell you--all I know I do!\' said Alice in a few minutes it puffed away without.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(14, 'YOUR adventures.\'.', 'Do cats eat bats?\' and sometimes, \'Do bats eat cats?\' for, you see, Alice had no idea what a Gryphon is, look at them--\'I wish they\'d get the trial done,\' she thought, \'till its ears have come, or at least one of these cakes,\' she thought, \'till its ears have come, or at any rate it would like the.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(15, 'By this time with.', 'Pigeon; \'but I know is, something comes at me like that!\' \'I couldn\'t help it,\' said Five, in a moment like a frog; and both footmen, Alice noticed, had powdered hair that WOULD always get into that lovely garden. First, however, she went nearer to watch them, and considered a little glass box.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(16, 'I tell you!\' But.', 'HATED cats: nasty, low, vulgar things! Don\'t let me hear the very tones of her head impatiently; and, turning to Alice. \'Only a thimble,\' said Alice thoughtfully: \'but then--I shouldn\'t be hungry for it, he was speaking, so that her flamingo was gone in a sort of knot, and then another confusion.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(17, 'There were doors.', 'Mock Turtle yet?\' \'No,\' said Alice. \'You did,\' said the Lory positively refused to tell me your history, you know,\' the Mock Turtle said: \'I\'m too stiff. And the Gryphon said to Alice. \'Nothing,\' said Alice. \'I\'ve so often read in the morning, just time to see what the next moment she appeared.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(18, 'The only things in.', 'Mock Turtle, \'Drive on, old fellow! Don\'t be all day to day.\' This was such a capital one for catching mice--oh, I beg your pardon!\' said the Pigeon; \'but if you\'ve seen them at dinn--\' she checked herself hastily, and said \'What else have you executed on the door and found herself safe in a.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(19, 'V. Advice from a.', 'As she said to herself; \'his eyes are so VERY much out of its mouth, and its great eyes half shut. This seemed to be lost, as she could, and soon found out that the hedgehog had unrolled itself, and began to cry again, for she felt that it is!\' As she said to herself that perhaps it was only.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(20, 'While she was near.', 'Alice said very politely, feeling quite pleased to have it explained,\' said the King. \'When did you manage on the ground as she could. The next witness was the first question, you know.\' \'Not at all,\' said the Mock Turtle drew a long hookah, and taking not the smallest idea how confusing it is.', 1, '2024-04-27 19:01:27', '2024-04-27 19:01:27'),
(21, 'Quia autem duis sint', 'Voluptatem deleniti', 1, '2024-04-28 06:59:39', '2024-04-28 06:59:39'),
(22, 'Aut asperiores do si', 'Cupidatat minus mole agui', 2, '2024-04-28 19:17:43', '2024-04-30 20:05:41'),
(23, 'Amogus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 2, '2024-04-30 20:10:42', '2024-04-30 20:10:42'),
(24, 'Dolor minima dolor s', 'Vero perspiciatis i Marko jest Abobus', 1, '2024-05-03 18:32:58', '2024-05-03 18:32:58'),
(25, 'Corrupti esse anim', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 1, '2024-07-12 18:09:48', '2024-07-12 18:09:48');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile_photo_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `profile_photo_path`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Bohdan Shcherbak', 'bohdan.dev777@gmail.com', '2024-04-27 19:01:27', '$2y$12$X36tmhdEOCs/XxJ6XvqeVeOOp9IPcyqIfABiMofASPflU4cTSdPim', '/images/profile/Bohdan1720887657.jpg', 'aDuLvQRJdZdUAT6Nq1NNeN6Kc0kiTAcrFjxRIuodfbeE18YjnQnHFbKqqtNd', '2024-04-27 19:01:27', '2024-07-29 14:07:07'),
(2, 'Malik Vasquez', 'vumetuwo@mailinator.com', '2024-04-27 19:01:27', '$2y$12$oUJBf9c.VBkPEWAWZA0qMeNufouOovA8CT5qTHVfLif2KeAhq7/ha', '/images/profile/default-profile.png', NULL, '2024-04-28 18:48:44', '2024-04-28 18:48:44'),
(3, 'Daniel Maldonado', 'bogsvity777@gmail.com', '2024-07-27 09:12:06', '$2y$12$x7VK6DbxEd4RHPJSveJnJuVk5QExiHbkysssxGSaC2FTpJYr3fnWu', '/images/profile/default-profile.png', 'cIJuyQv513Svb08jl23BY83dZGwAbM0FrVAhLdRazIPMPoUmujcmqcX6hyoU', '2024-07-27 08:44:45', '2024-08-01 05:55:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `likes_user_id_foreign` (`user_id`),
  ADD KEY `likes_prompt_id_foreign` (`prompt_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `prompts`
--
ALTER TABLE `prompts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prompts_prompt_author_id_foreign` (`prompt_author_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `prompts`
--
ALTER TABLE `prompts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_prompt_id_foreign` FOREIGN KEY (`prompt_id`) REFERENCES `prompts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `likes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `prompts`
--
ALTER TABLE `prompts`
  ADD CONSTRAINT `prompts_prompt_author_id_foreign` FOREIGN KEY (`prompt_author_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
