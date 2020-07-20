const poses = [
  {
    id: 1,
    img: "https://pocketyoga.com/assets/images/poses/awkward.png",
    name: "Awkward",
    sanskrit: "Utkaṭāsana",
  },

  {
    id: 2,
    img: "https://pocketyoga.com/assets/images/poses/forward_bend_big_toe.png",
    name: "Big Toe",
    sanskrit: "Pādāṇguṣṭhāsana",
  },

  {
    id: 3,
    img: "https://pocketyoga.com/assets/images/poses/chair_twist_bind_up_R.png",
    name: "Bird of Paradise",
    sanskrit: "Svarga Dvijāsana",
  },

  {
    id: 4,
    img:
      "https://pocketyoga.com/assets/images/poses/bird_of_paradise_revolved_L.png",
    name: "Bird of Paradise, Revolved",
    sanskrit: "Parivṛtta Svarga Dvijāsana",
  },

  {
    id: 5,
    img: "https://pocketyoga.com/assets/images/poses/boat_full.png",
    name: "Boat",
    sanskrit: "Nāvāsana",
  },

  {
    id: 6,
    img: "https://pocketyoga.com/assets/images/poses/boat_half.png",
    name: "Boat, Half",
    sanskrit: "Ardha Nāvāsana",
  },

  {
    id: 7,
    img:
      "https://pocketyoga.com/assets/images/poses/boat_bind_outside_edge.png",
    name: "Boat (Thighs to Chest)",
    sanskrit: "Ūrdhva Mukha Paścimottānāsana",
  },

  {
    id: 8,
    img: "https://pocketyoga.com/assets/images/poses/boat_bind.png",
    name: "Boat (Toe Hold)",
    sanskrit: "Ubhaya Pādāṅguṣṭhāsana",
  },

  {
    id: 9,
    img: "https://pocketyoga.com/assets/images/poses/bound_angle.png",
    name: "Bound Angle",
    sanskrit: "Baddha Koṇāsana",
  },

  {
    id: 10,
    img: "https://pocketyoga.com/assets/images/poses/bound_angle_forward.png",
    name: "Bound Angle, Extended",
    sanskrit: "Baddha Koṇāsana",
  },

  {
    id: 11,
    img: "https://pocketyoga.com/assets/images/poses/supine_bound_angle.png",
    name: "Bound Angle, Supine",
    sanskrit: "Supta Baddha Koṇāsana",
  },

  {
    id: 12,
    img: "https://pocketyoga.com/assets/images/poses/bow.png",
    name: "Bow",
    sanskrit: "Dhanurāsana",
  },

  {
    id: 13,
    img: "https://pocketyoga.com/assets/images/poses/bow_half_R.png",
    name: "Bow, Half",
    sanskrit: "Ardha Dhanurāsana",
  },

  {
    id: 14,
    img: "https://pocketyoga.com/assets/images/poses/bow_side_R.png",
    name: "Bow, Side",
    sanskrit: "Pārśva Dhanurāsana",
  },

  {
    id: 15,
    img: "https://pocketyoga.com/assets/images/poses/box_neutral.png",
    name: "Box",
    sanskrit: "Cakravākāsana",
  },

  {
    id: 16,
    img: "https://pocketyoga.com/assets/images/poses/bridge.png",
    name: "Bridge",
    sanskrit: "Setu Bandha Sarvāṅgāsana",
  },

  {
    id: 17,
    img: "https://pocketyoga.com/assets/images/poses/bridge_leg_up_R.png",
    name: "Bridge, One Legged",
    sanskrit: "Eka Pāda Setu Bandha Sarvāṅgāsana",
  },

  {
    id: 18,
    img: "https://pocketyoga.com/assets/images/poses/camel.png",
    name: "Camel",
    sanskrit: "Uṣṭrāsana",
  },

  {
    id: 19,
    img: "https://pocketyoga.com/assets/images/poses/cat.png",
    name: "Cat",
    sanskrit: "Marjaryāsana",
  },

  {
    id: 20,
    img: "https://pocketyoga.com/assets/images/poses/chair.png",
    name: "Chair",
    sanskrit: "Utkaṭāsana",
  },

  {
    id: 21,
    img: "https://pocketyoga.com/assets/images/poses/chair_twist_bind_R.png",
    name: "Chair, Bound Revolved",
    sanskrit: "Parivṛtta Baddha Utkaṭāsana",
  },

  {
    id: 22,
    img: "https://pocketyoga.com/assets/images/poses/chair_twist_R.png",
    name: "Chair, Revolved",
    sanskrit: "Parivṛtta Utkaṭāsana",
  },

  {
    id: 23,
    img:
      "https://pocketyoga.com/assets/images/poses/chair_twist_extended_R.png",
    name: "Chair, Revolved (Arms Extended)",
    sanskrit: "Utthita Parivṛtta Utkaṭāsana",
  },

  {
    id: 24,
    img: "https://pocketyoga.com/assets/images/poses/child_traditional.png",
    name: "Child's",
    sanskrit: "Balāsana",
  },

  {
    id: 25,
    img: "https://pocketyoga.com/assets/images/poses/child.png",
    name: "Child's, Extended",
    sanskrit: "Utthita Balāsana",
  },

  {
    id: 26,
    img: "https://pocketyoga.com/assets/images/poses/box_hand_to_ankle_R.png",
    name: "Child's, Revolved",
    sanskrit: "Pārśva Balāsana",
  },

  {
    id: 27,
    img: "https://pocketyoga.com/assets/images/poses/child_wide.png",
    name: "Child's, Wide",
    sanskrit: "Balāsana",
  },

  {
    id: 28,
    img: "https://pocketyoga.com/assets/images/poses/chin_stand.png",
    name: "Chin Stand",
    sanskrit: "Gaṇḍa Bheruṇḍāsana",
  },

  {
    id: 29,
    img: "https://pocketyoga.com/assets/images/poses/cobra_full.png",
    name: "Cobra, High",
    sanskrit: "Bhujaṅgāsana",
  },

  {
    id: 30,
    img: "https://pocketyoga.com/assets/images/poses/cobra_king.png",
    name: "Cobra, King",
    sanskrit: "Rāja Bhujaṅgāsana",
  },

  {
    id: 31,
    img: "https://pocketyoga.com/assets/images/poses/cobra.png",
    name: "Cobra, Low",
    sanskrit: "Ardha Bhujaṅgāsana",
  },

  {
    id: 32,
    img: "https://pocketyoga.com/assets/images/poses/corpse.png",
    name: "Corpse",
    sanskrit: "Śavāsana",
  },

  {
    id: 33,
    img: "https://pocketyoga.com/assets/images/poses/dog.png",
    name: "Cow",
    sanskrit: "Bitilāsana",
  },

  {
    id: 34,
    img: "https://pocketyoga.com/assets/images/poses/knee_pile_bind_R.png",
    name: "Cow Face",
    sanskrit: "Gomukhāsana",
  },

  {
    id: 35,
    img:
      "https://pocketyoga.com/assets/images/poses/knee_pile_bind_forward_R.png",
    name: "Cow Face, Forward Bend",
    sanskrit: "Gomukhāsana",
  },

  {
    id: 36,
    img: "https://pocketyoga.com/assets/images/poses/crane.png",
    name: "Crane",
    sanskrit: "Bakāsana",
  },

  {
    id: 37,
    img:
      "https://pocketyoga.com/assets/images/poses/lunge_twist_extended_bound_R.png",
    name: "Crescent Lunge, Bound Revolved",
    sanskrit: "Parivṛtta Baddha Aṅjaneyāsana",
  },

  {
    id: 38,
    img: "https://pocketyoga.com/assets/images/poses/warrior_I_kneeling_R.png",
    name: "Crescent Lunge on the Knee",
    sanskrit: "Aṅjaneyāsana",
  },

  {
    id: 39,
    img:
      "https://pocketyoga.com/assets/images/poses/lunge_kneeling_twist_extended_bound_R.png",
    name: "Crescent Lunge on the Knee, Bound Revolved",
    sanskrit: "Parivṛtta Baddha Aṅjaneyāsana",
  },

  {
    id: 40,
    img:
      "https://pocketyoga.com/assets/images/poses/lunge_kneeling_twist_R.png",
    name: "Crescent Lunge on the Knee, Revolved",
    sanskrit: "Parivṛtta Aṅjaneyāsana",
  },

  {
    id: 41,
    img:
      "https://pocketyoga.com/assets/images/poses/lunge_kneeling_twist_extended_R.png",
    name: "Crescent Lunge on the Knee, Revolved (Arms Extended)",
    sanskrit: "Utthita Parivṛtta Aṅjaneyāsana",
  },

  {
    id: 42,
    img: "https://pocketyoga.com/assets/images/poses/lunge_twist_R.png",
    name: "Crescent Lunge, Revolved",
    sanskrit: "Parivṛtta Aṅjaneyāsana",
  },

  {
    id: 43,
    img:
      "https://pocketyoga.com/assets/images/poses/lunge_twist_extended_R.png",
    name: "Crescent Lunge, Revolved (Arms Extended)",
    sanskrit: "Utthita Parivṛtta Aṅjaneyāsana",
  },

  {
    id: 44,
    img: "https://pocketyoga.com/assets/images/poses/crescent_moon_R.png",
    name: "Crescent Moon",
    sanskrit: "Ashta Chandrāsana",
  },

  {
    id: 45,
    img: "https://pocketyoga.com/assets/images/poses/crow.png",
    name: "Crow",
    sanskrit: "Kākāsana",
  },

  {
    id: 46,
    img: "https://pocketyoga.com/assets/images/poses/crow_flying_L.png",
    name: "Crow, One Legged",
    sanskrit: "Eka Pāda Kākāsana",
  },

  {
    id: 47,
    img: "https://pocketyoga.com/assets/images/poses/crow_side_L.png",
    name: "Crow, Side",
    sanskrit: "Pārśva Bakāsana",
  },

  {
    id: 48,
    img: "https://pocketyoga.com/assets/images/poses/deaf_man.png",
    name: "Deaf Man's",
    sanskrit: "Karṇapīḍāsana",
  },

  {
    id: 49,
    img: "https://pocketyoga.com/assets/images/poses/dolphin.png",
    name: "Dolphin",
    sanskrit: "Ardha Pīñcha Mayūrāsana",
  },

  {
    id: 50,
    img: "https://pocketyoga.com/assets/images/poses/downward_dog.png",
    name: "Downward-Facing Dog",
    sanskrit: "Adho Mukha Śvānāsana",
  },

  {
    id: 51,
    img:
      "https://pocketyoga.com/assets/images/poses/downward_dog_hand_to_ankle_R.png",
    name: "Downward-Facing Dog, Revolved",
    sanskrit: "Parivṛtta Adho Mukha Śvānāsana",
  },

  {
    id: 52,
    img: "https://pocketyoga.com/assets/images/poses/downward_dog_leg_up_R.png",
    name: "Downward-Facing Dog, Three Legged",
    sanskrit: "Eka Pāda Adho Mukha Śvānāsana",
  },

  {
    id: 53,
    img: "https://pocketyoga.com/assets/images/poses/eagle_L.png",
    name: "Eagle",
    sanskrit: "Garuḍāsana",
  },

  {
    id: 54,
    img: "https://pocketyoga.com/assets/images/poses/easy.png",
    name: "Easy",
    sanskrit: "Sukhāsana",
  },

  {
    id: 55,
    img: "https://pocketyoga.com/assets/images/poses/eight_angle_L.png",
    name: "Eight Angle",
    sanskrit: "Aṣṭāvakrāsana",
  },

  {
    id: 56,
    img: "https://pocketyoga.com/assets/images/poses/eight_point.png",
    name: "Eight Point",
    sanskrit: "Aṣṭāṅga Namaskāra",
  },

  {
    id: 57,
    img: "https://pocketyoga.com/assets/images/poses/embryo.png",
    name: "Embryo",
    sanskrit: "Piṇḍāsana",
  },

  {
    id: 58,
    img: "https://pocketyoga.com/assets/images/poses/puppy_extended.png",
    name: "Extended Puppy",
    sanskrit: "Uttāna Shishosana",
  },

  {
    id: 59,
    img: "https://pocketyoga.com/assets/images/poses/firefly.png",
    name: "Firefly",
    sanskrit: "Tittibhāsana",
  },

  {
    id: 60,
    img: "https://pocketyoga.com/assets/images/poses/tortoise_bind.png",
    name: "Firefly, Standing",
    sanskrit: "Utthita Tittibhāsana",
  },

  {
    id: 61,
    img: "https://pocketyoga.com/assets/images/poses/fire_log_R.png",
    name: "Fire Log",
    sanskrit: "Agnistambhāsana",
  },

  {
    id: 62,
    img: "https://pocketyoga.com/assets/images/poses/fish_lotus.png",
    name: "Fish",
    sanskrit: "Matsyāsana",
  },

  {
    id: 63,
    img: "https://pocketyoga.com/assets/images/poses/fish.png",
    name: "Fish, Flying",
    sanskrit: "Uttāna Pādāsana",
  },

  {
    id: 64,
    img:
      "https://pocketyoga.com/assets/images/poses/lunge_hands_on_mat_flying_L.png",
    name: "Flying Man",
    sanskrit: "Eka Pāda Kouṇḍinyāsana",
  },

  {
    id: 65,
    img: "https://pocketyoga.com/assets/images/poses/flying_man_revolved_L.png",
    name: "Flying Man, Revolved",
    sanskrit: "Parivṛtta Eka Pāda Kouṇḍinyāsana",
  },

  {
    id: 66,
    img: "https://pocketyoga.com/assets/images/poses/feathered_peacock.png",
    name: "Forearm Balance",
    sanskrit: "Pīñcha Mayūrāsana",
  },

  {
    id: 67,
    img: "https://pocketyoga.com/assets/images/poses/seated_forward_bend.png",
    name: "Forward Bend, Seated",
    sanskrit: "Paścimottānāsana",
  },

  {
    id: 68,
    img:
      "https://pocketyoga.com/assets/images/poses/seated_forward_bend_half_lotus_R.png",
    name: "Forward Bend, Seated Half Bound Lotus",
    sanskrit: "Ardha Baddha Padma Paścimottānāsana",
  },

  {
    id: 69,
    img:
      "https://pocketyoga.com/assets/images/poses/seated_forward_bend_three_limbs_L.png",
    name: "Forward Bend, Seated Three Limbed",
    sanskrit: "Triaṅgā Mukhaikapāda Paścimottānāsana",
  },

  {
    id: 70,
    img: "https://pocketyoga.com/assets/images/poses/forward_bend.png",
    name: "Forward Bend, Standing",
    sanskrit: "Uttānāsana",
  },

  {
    id: 71,
    img:
      "https://pocketyoga.com/assets/images/poses/standing_forward_bend_half_lotus_L.png",
    name: "Forward Bend, Standing Half Bound Lotus",
    sanskrit: "Ardha Baddha Padmottānāsana",
  },

  {
    id: 72,
    img: "https://pocketyoga.com/assets/images/poses/forward_bend_deep.png",
    name: "Forward Bend, Standing (Shoulder Opener)",
    sanskrit: "Uttānāsana",
  },

  {
    id: 73,
    img: "https://pocketyoga.com/assets/images/poses/forward_bend_twist_L.png",
    name: "Forward Bend, Standing Twist",
    sanskrit: "Parivṛtta Uttānāsana",
  },

  {
    id: 74,
    img: "https://pocketyoga.com/assets/images/poses/frog.png",
    name: "Frog",
    sanskrit: "Bhekāsana",
  },

  {
    id: 75,
    img: "https://pocketyoga.com/assets/images/poses/garland.png",
    name: "Garland",
    sanskrit: "Mālāsana",
  },

  {
    id: 76,
    img: "https://pocketyoga.com/assets/images/poses/goddess_R.png",
    name: "Goddess",
    sanskrit: "Utkaṭa Koṇāsana",
  },

  {
    id: 77,
    img: "https://pocketyoga.com/assets/images/poses/gorilla.png",
    name: "Gorilla",
    sanskrit: "Pādahastāsana",
  },

  {
    id: 78,
    img: "https://pocketyoga.com/assets/images/poses/grasshopper_R.png",
    name: "Grasshopper",
    sanskrit: "Maksikanagāsana",
  },

  {
    id: 79,
    img: "https://pocketyoga.com/assets/images/poses/half_moon_R.png",
    name: "Half Moon",
    sanskrit: "Ardha Chandrāsana",
  },

  {
    id: 80,
    img:
      "https://pocketyoga.com/assets/images/poses/half_moon_bound_hands_R.png",
    name: "Half Moon, Bound",
    sanskrit: "Baddha Ardha Chandrāsana",
  },

  {
    id: 81,
    img:
      "https://pocketyoga.com/assets/images/poses/half_moon_revolved_bound_R.png",
    name: "Half Moon, Bound Revolved",
    sanskrit: "Parivṛtta Baddha Ardha Chandrāsana",
  },

  {
    id: 82,
    img: "https://pocketyoga.com/assets/images/poses/half_moon_revolved_R.png",
    name: "Half Moon, Revolved",
    sanskrit: "Parivṛtta Ardha Chandrāsana",
  },

  {
    id: 83,
    img: "https://pocketyoga.com/assets/images/poses/forward_bend_half_way.png",
    name: "Halfway Lift",
    sanskrit: "Ardha Uttānāsana",
  },

  {
    id: 84,
    img: "https://pocketyoga.com/assets/images/poses/handstand.png",
    name: "Handstand",
    sanskrit: "Adho Mukha Vṛkṣāsana",
  },

  {
    id: 85,
    img: "https://pocketyoga.com/assets/images/poses/handstand_scorpion.png",
    name: "Handstand, Scorpion",
    sanskrit: "Vṛśchikāsana II",
  },

  {
    id: 86,
    img:
      "https://pocketyoga.com/assets/images/poses/standing_hand_to_toe_extended_R.png",
    name: "Hand to Toe, Extended Standing",
    sanskrit: "Utthita Hasta Pādāṅguṣṭhāsana",
  },

  {
    id: 87,
    img:
      "https://pocketyoga.com/assets/images/poses/supine_hand_to_toe_extended_L.png",
    name: "Hand to Toe, Extended Supine",
    sanskrit: "Utthita Supta Hasta Pādāṅguṣṭhāsana",
  },

  {
    id: 88,
    img:
      "https://pocketyoga.com/assets/images/poses/standing_hand_to_toe_revolved_R.png",
    name: "Hand to Toe, Revolved Standing",
    sanskrit: "Parivṛtta Hasta Pādāṅguṣṭhāsana",
  },

  {
    id: 89,
    img:
      "https://pocketyoga.com/assets/images/poses/standing_hand_to_toe_full_R.png",
    name: "Hand to Toe, Standing",
    sanskrit: "Hasta Pādāṅguṣṭhāsana",
  },

  // {
  //   id: 90,
  //   img:
  //     "https://pocketyoga.com/assets/images/poses/standing_hand_to_toe_R.png",
  //   name: "Hand to Toe, Standing (Preparation)",
  //   sanskrit: "Hasta Pādāṅguṣṭhāsana",
  // },

  {
    id: 91,
    img:
      "https://pocketyoga.com/assets/images/poses/supine_hand_to_toe_full_R.png",
    name: "Hand to Toe, Supine",
    sanskrit: "Supta Hasta Pādāṅguṣṭhāsana",
  },

  // {
  //   id: 92,
  //   img: "https://pocketyoga.com/assets/images/poses/supine_hand_to_toe_R.png",
  //   name: "Hand to Toe, Supine (Preparation)",
  //   sanskrit: "Supta Hasta Pādāṅguṣṭhāsana",
  // },

  {
    id: 93,
    img: "https://pocketyoga.com/assets/images/poses/blissful_baby.png",
    name: "Happy Baby",
    sanskrit: "Ānanda Bālāsana",
  },

  {
    id: 94,
    img:
      "https://pocketyoga.com/assets/images/poses/headstand_tripod_straight_arms.png",
    name: "Headstand, Free Hands",
    sanskrit: "Mukta Hasta Śīrṣāsana",
  },

  {
    id: 95,
    img: "https://pocketyoga.com/assets/images/poses/headstand_supported.png",
    name: "Headstand, Supported",
    sanskrit: "Sālamba Śīrṣāsana I",
  },

  {
    id: 96,
    img:
      "https://pocketyoga.com/assets/images/poses/headstand_supported_half_way.png",
    name: "Headstand, Supported (Legs Halfway Down)",
    sanskrit: "Ūrdhva Daṇḍāsana",
  },

  {
    id: 97,
    img: "https://pocketyoga.com/assets/images/poses/headstand_tripod.png",
    name: "Headstand, Tripod",
    sanskrit: "Sālamba Śīrṣāsana II",
  },

  {
    id: 98,
    img:
      "https://pocketyoga.com/assets/images/poses/headstand_tripod_spiral_legs.png",
    name: "Headstand, Tripod (Spiral the Legs)",
    sanskrit: "Parivṛttaikapāda Śīrṣāsana II",
  },

  {
    id: 99,
    img: "https://pocketyoga.com/assets/images/poses/head_to_knee_L.png",
    name: "Head to Knee",
    sanskrit: "Jānu Śīrṣāsana",
  },

  {
    id: 100,
    img:
      "https://pocketyoga.com/assets/images/poses/head_to_knee_revolved_L.png",
    name: "Head to Knee, Revolved",
    sanskrit: "Parivṛtta Jānu Śīrṣāsana",
  },

  {
    id: 101,
    img:
      "https://pocketyoga.com/assets/images/poses/standing_head_to_knee_R.png",
    name: "Head to Knee, Standing",
    sanskrit: "Daṇḍayamana Jānu Śīrāsana",
  },

  {
    id: 102,
    img: "https://pocketyoga.com/assets/images/poses/hero.png",
    name: "Hero",
    sanskrit: "Vīrāsana",
  },

  {
    id: 103,
    img:
      "https://pocketyoga.com/assets/images/poses/hero_reclining_extended.png",
    name: "Hero, Extended Supine",
    sanskrit: "Utthita Supta Vīrāsana",
  },

  {
    id: 104,
    img: "https://pocketyoga.com/assets/images/poses/heron_L.png",
    name: "Heron",
    sanskrit: "Krauñcāsana",
  },

  {
    id: 105,
    img: "https://pocketyoga.com/assets/images/poses/hero_reclining.png",
    name: "Hero, Supine",
    sanskrit: "Supta Vīrāsana",
  },

  {
    id: 106,
    img: "https://pocketyoga.com/assets/images/poses/pigeon_king_R.png",
    name: "King Pigeon, One Legged",
    sanskrit: "Eka Pāda Rājakapotāsana",
  },

  {
    id: 107,
    img: "https://pocketyoga.com/assets/images/poses/pigeon_full_R.png",
    name: "King Pigeon, One Legged (Mermaid)",
    sanskrit: "Eka Pāda Rājakapotāsana",
  },

  {
    id: 108,
    img: "https://pocketyoga.com/assets/images/poses/lizard_R.png",
    name: "Lizard",
    sanskrit: "Uttāna Pristhāsana",
  },

  {
    id: 109,
    img: "https://pocketyoga.com/assets/images/poses/lizard_kneeling_R.png",
    name: "Lizard on the Knee",
    sanskrit: "Uttāna Pristhāsana",
  },

  {
    id: 110,
    img: "https://pocketyoga.com/assets/images/poses/locust.png",
    name: "Locust",
    sanskrit: "Śalabhāsana",
  },

  {
    id: 111,
    img: "https://pocketyoga.com/assets/images/poses/locust_half_R.png",
    name: "Locust, Half",
    sanskrit: "Ardha Śalabhāsana",
  },

  {
    id: 112,
    img: "https://pocketyoga.com/assets/images/poses/lord_of_the_dance_R.png",
    name: "Lord of the Dance",
    sanskrit: "Naṭarājāsana",
  },

  {
    id: 113,
    img:
      "https://pocketyoga.com/assets/images/poses/lord_of_the_dance_full_R.png",
    name: "Lord of the Dance, Full",
    sanskrit: "Naṭarājāsana",
  },

  {
    id: 114,
    img: "https://pocketyoga.com/assets/images/poses/lotus_full.png",
    name: "Lotus",
    sanskrit: "Padmāsana",
  },

  {
    id: 115,
    img: "https://pocketyoga.com/assets/images/poses/lotus_bound.png",
    name: "Lotus, Bound",
    sanskrit: "Baddha Padmāsana",
  },

  {
    id: 116,
    img: "https://pocketyoga.com/assets/images/poses/lotus_bound_forward.png",
    name: "Lotus, Extended Bound",
    sanskrit: "Yoga Mudrā",
  },

  {
    id: 117,
    img: "https://pocketyoga.com/assets/images/poses/lotus_half.png",
    name: "Lotus, Half",
    sanskrit: "Ardha Padmāsana",
  },

  {
    id: 118,
    img: "https://pocketyoga.com/assets/images/poses/standing_half_lotus_L.png",
    name: "Lotus, Standing Half",
    sanskrit: "Ardha Padmāsana",
  },

  {
    id: 119,
    img:
      "https://pocketyoga.com/assets/images/poses/standing_half_lotus_bound_L.png",
    name: "Lotus, Standing Half Bound",
    sanskrit: "Ardha Baddha Padmāsana",
  },

  {
    id: 120,
    img: "https://pocketyoga.com/assets/images/poses/mountain_arms_side.png",
    name: "Mountain",
    sanskrit: "Tāḍāsana",
  },

  {
    id: 121,
    img: "https://pocketyoga.com/assets/images/poses/mountain_salute.png",
    name: "Mountain (Arms Up)",
    sanskrit: "Ūrdhva Hastāsana",
  },

  {
    id: 122,
    img: "https://pocketyoga.com/assets/images/poses/mountain_arms_up.png",
    name: "Mountain (Arms Up and Backbend)",
    sanskrit: "Ūrdhva Hastāsana",
  },

  {
    id: 123,
    img: "https://pocketyoga.com/assets/images/poses/mountain.png",
    name: "Mountain (Prayer Hands)",
    sanskrit: "Tāḍāsana",
  },

  {
    id: 124,
    img: "https://pocketyoga.com/assets/images/poses/pigeon.png",
    name: "Pigeon",
    sanskrit: "Kapotāsana",
  },

  {
    id: 125,
    img: "https://pocketyoga.com/assets/images/poses/pigeon_flying_R.png",
    name: "Pigeon, Flying",
    sanskrit: "Eka Pāda Gālavāsana",
  },

  {
    id: 126,
    img: "https://pocketyoga.com/assets/images/poses/supine_pigeon_R.png",
    name: "Pigeon, Supine",
    sanskrit: "Supta Kapotāsana",
  },

  {
    id: 127,
    img: "https://pocketyoga.com/assets/images/poses/plank.png",
    name: "Plank",
    sanskrit: "Phalakāsana",
  },

  {
    id: 128,
    img: "https://pocketyoga.com/assets/images/poses/plank_side_extended_L.png",
    name: "Plank, Extended Side",
    sanskrit: "Utthita Vasiṣṭhāsana",
  },

  {
    id: 129,
    img: "https://pocketyoga.com/assets/images/poses/plank_leg_up_R.png",
    name: "Plank, One Legged",
    sanskrit: "Eka Pāda Phalakāsana",
  },

  {
    id: 130,
    img: "https://pocketyoga.com/assets/images/poses/plank_side_L.png",
    name: "Plank, Side",
    sanskrit: "Vasiṣṭhāsana",
  },

  {
    id: 131,
    img: "https://pocketyoga.com/assets/images/poses/plank_upward.png",
    name: "Plank, Upward",
    sanskrit: "Pūrvottānāsana",
  },

  {
    id: 132,
    img: "https://pocketyoga.com/assets/images/poses/plow.png",
    name: "Plow",
    sanskrit: "Halāsana",
  },

  {
    id: 133,
    img: "https://pocketyoga.com/assets/images/poses/four_limbed_staff.png",
    name: "Push-up, Low",
    sanskrit: "Chaturaṅga Daṇḍāsana",
  },

  {
    id: 134,
    img: "https://pocketyoga.com/assets/images/poses/pyramid_prayer_R.png",
    name: "Pyramid",
    sanskrit: "Pārśvottānāsana",
  },

  {
    id: 135,
    img: "https://pocketyoga.com/assets/images/poses/rabbit.png",
    name: "Rabbit",
    sanskrit: "Sasangāsana",
  },

  {
    id: 136,
    img:
      "https://pocketyoga.com/assets/images/poses/corpse_double_leg_raise.png",
    name: "Rejuvenation",
    sanskrit: "Supta Daṇḍāsana",
  },

  {
    id: 137,
    img: "https://pocketyoga.com/assets/images/poses/crow_side_extended_L.png",
    name: "Sage Koundinya's, Two Legged",
    sanskrit: "Dvi Pāda Kouṇḍinyāsana",
  },

  {
    id: 138,
    img:
      "https://pocketyoga.com/assets/images/poses/marichi_I_traditional_R.png",
    name: "Sage Marichi's I",
    sanskrit: "Marīchyāsana I",
  },

  {
    id: 139,
    img:
      "https://pocketyoga.com/assets/images/poses/marichi_II_traditional_R.png",
    name: "Sage Marichi's II",
    sanskrit: "Marīchyāsana II",
  },

  {
    id: 140,
    img:
      "https://pocketyoga.com/assets/images/poses/marichi_III_traditional_R.png",
    name: "Sage Marichi's III",
    sanskrit: "Marīchyāsana III",
  },

  {
    id: 141,
    img:
      "https://pocketyoga.com/assets/images/poses/marichi_IV_traditional_R.png",
    name: "Sage Marichi's IV",
    sanskrit: "Marīchyāsana IV",
  },

  {
    id: 142,
    img: "https://pocketyoga.com/assets/images/poses/visvamitra_R.png",
    name: "Sage Visvamitra's",
    sanskrit: "Viśvāmitrāsana",
  },

  {
    id: 143,
    img: "https://pocketyoga.com/assets/images/poses/visvamitra_kneeling_R.png",
    name: "Sage Visvamitra's on the Knee",
    sanskrit: "Ardha Viśvāmitrāsana",
  },

  {
    id: 144,
    img: "https://pocketyoga.com/assets/images/poses/lotus_elevated.png",
    name: "Scale",
    sanskrit: "Tolāsana",
  },

  {
    id: 145,
    img: "https://pocketyoga.com/assets/images/poses/scorpion.png",
    name: "Scorpion",
    sanskrit: "Vṛśchikāsana I",
  },

  {
    id: 146,
    img: "https://pocketyoga.com/assets/images/poses/scale_forward.png",
    name: "Shoulder Pressing",
    sanskrit: "Bhujapīḍāsana",
  },

  {
    id: 147,
    img: "https://pocketyoga.com/assets/images/poses/shoulderstand_lotus.png",
    name: "Shoulder Stand (Lotus Legs)",
    sanskrit: "Ūrdhva Padmāsana",
  },

  {
    id: 148,
    img:
      "https://pocketyoga.com/assets/images/poses/shoulderstand_supported.png",
    name: "Shoulder Stand, Supported",
    sanskrit: "Sālamba Sarvāṅgāsana",
  },

  {
    id: 149,
    img:
      "https://pocketyoga.com/assets/images/poses/shoulderstand_unsupported.png",
    name: "Shoulder Stand, Unsupported",
    sanskrit: "Nirālamba Sarvāṅgāsana",
  },

  {
    id: 150,
    img: "https://pocketyoga.com/assets/images/poses/warrior_II_forward_R.png",
    name: "Side Angle",
    sanskrit: "Pārśvakoṇāsana",
  },

  {
    id: 151,
    img: "https://pocketyoga.com/assets/images/poses/lunge_bind_R.png",
    name: "Side Angle, Bound",
    sanskrit: "Baddha Pārśvakoṇāsana",
  },

  {
    id: 152,
    img:
      "https://pocketyoga.com/assets/images/poses/warrior_twist_extended_bound_R.png",
    name: "Side Angle, Bound Revolved",
    sanskrit: "Parivṛtta Baddha Pārśvakoṇāsana",
  },

  {
    id: 153,
    img:
      "https://pocketyoga.com/assets/images/poses/warrior_II_forward_arm_forward_R.png",
    name: "Side Angle, Extended",
    sanskrit: "Utthita Pārśvakoṇāsana",
  },

  {
    id: 154,
    img: "https://pocketyoga.com/assets/images/poses/side_angle_extended_R.png",
    name: "Side Angle, Revolved",
    sanskrit: "Parivṛtta Pārśvakoṇāsana",
  },

  {
    id: 155,
    img: "https://pocketyoga.com/assets/images/poses/side_lunge_R.png",
    name: "Side Lunge",
    sanskrit: "Skandāsana",
  },

  {
    id: 156,
    img: "https://pocketyoga.com/assets/images/poses/side_lunge_extended_R.png",
    name: "Side Lunge (Arms Extended)",
    sanskrit: "Skandāsana",
  },

  {
    id: 157,
    img:
      "https://pocketyoga.com/assets/images/poses/side_lunge_extended_bound_R.png",
    name: "Side Lunge, Bound",
    sanskrit: "Skandāsana",
  },

  {
    id: 158,
    img: "https://pocketyoga.com/assets/images/poses/sphinx.png",
    name: "Sphinx",
    sanskrit: "Sālamba Bhujaṅgāsana",
  },

  {
    id: 159,
    img: "https://pocketyoga.com/assets/images/poses/supine_spinal_twist_R.png",
    name: "Spinal Twist, Supine",
    sanskrit: "Supta Jaṭhara Parivartānāsana",
  },

  {
    id: 160,
    img:
      "https://pocketyoga.com/assets/images/poses/splits_standing_bound_R.png",
    name: "Splits, Balancing Standing",
    sanskrit: "Ūrdhva Prasārita Eka Pādāsana",
  },

  {
    id: 161,
    img: "https://pocketyoga.com/assets/images/poses/splits_front_R.png",
    name: "Splits, Front",
    sanskrit: "Hanumānāsana",
  },

  {
    id: 162,
    img: "https://pocketyoga.com/assets/images/poses/pyramid_kneeling_R.png",
    name: "Splits, Half",
    sanskrit: "Ardha Hanumānāsana",
  },

  {
    id: 163,
    img: "https://pocketyoga.com/assets/images/poses/splits_standing_R.png",
    name: "Splits, Standing",
    sanskrit: "Ūrdhva Prasārita Eka Pādāsana",
  },

  {
    id: 164,
    img: "https://pocketyoga.com/assets/images/poses/splits_wide.png",
    name: "Splits, Wide",
    sanskrit: "Upaviṣṭa Koṇāsana",
  },

  {
    id: 165,
    img:
      "https://pocketyoga.com/assets/images/poses/seated_on_heels_twist_bound_L.png",
    name: "Squatting Toe Balance, Bound Revolved",
    sanskrit: "Pāśasana",
  },

  {
    id: 166,
    img: "https://pocketyoga.com/assets/images/poses/staff.png",
    name: "Staff",
    sanskrit: "Daṇḍāsana",
  },

  {
    id: 167,
    img: "https://pocketyoga.com/assets/images/poses/staff_inverted.png",
    name: "Staff, Inverted",
    sanskrit: "Dvi Pāda Viparīta Daṇḍāsana",
  },

  {
    id: 168,
    img: "https://pocketyoga.com/assets/images/poses/half_moon_bound_R.png",
    name: "Sugarcane",
    sanskrit: "Ardha Chandra Chapāsana",
  },

  {
    id: 169,
    img: "https://pocketyoga.com/assets/images/poses/supine_angle.png",
    name: "Supine Angle",
    sanskrit: "Supta Koṇāsana",
  },

  {
    id: 170,
    img: "https://pocketyoga.com/assets/images/poses/cat_balance_R.png",
    name: "Table, Balancing",
    sanskrit: "Utthita Cakravākāsana",
  },

  {
    id: 171,
    img: "https://pocketyoga.com/assets/images/poses/table.png",
    name: "Table, Reverse",
    sanskrit: "Ardha Pūrvottānāsana",
  },

  {
    id: 172,
    img: "https://pocketyoga.com/assets/images/poses/thunderbolt.png",
    name: "Thunderbolt",
    sanskrit: "Vajrasana",
  },

  {
    id: 173,
    img: "https://pocketyoga.com/assets/images/poses/toe_stand_R.png",
    name: "Toe Stand",
    sanskrit: "Pādāṅguṣṭhāsana",
  },

  {
    id: 174,
    img: "https://pocketyoga.com/assets/images/poses/supine_tortoise.png",
    name: "Tortoise",
    sanskrit: "Kūrmāsana",
  },

  {
    id: 175,
    img: "https://pocketyoga.com/assets/images/poses/supine_tortoise_bind.png",
    name: "Tortoise, Sleeping",
    sanskrit: "Supta Kūrmāsana",
  },

  {
    id: 176,
    img: "https://pocketyoga.com/assets/images/poses/tree_prayer_L.png",
    name: "Tree",
    sanskrit: "Vṛkṣāsana",
  },

  {
    id: 177,
    img: "https://pocketyoga.com/assets/images/poses/tree_L.png",
    name: "Tree (Arms Up)",
    sanskrit: "Vṛkṣāsana",
  },

  {
    id: 178,
    img: "https://pocketyoga.com/assets/images/poses/tree_toppling_R.png",
    name: "Tree, Toppling",
    sanskrit: "Patan Vṛkṣāsana",
  },

  {
    id: 179,
    img: "https://pocketyoga.com/assets/images/poses/triangle_forward_R.png",
    name: "Triangle",
    sanskrit: "Trikoṇāsana",
  },

  {
    id: 180,
    img: "https://pocketyoga.com/assets/images/poses/triangle_bound_R.png",
    name: "Triangle, Bound",
    sanskrit: "Baddha Trikoṇāsana",
  },

  {
    id: 181,
    img: "https://pocketyoga.com/assets/images/poses/triangle_revolved_R.png",
    name: "Triangle, Revolved",
    sanskrit: "Parivṛtta Trikoṇāsana",
  },

  {
    id: 182,
    img: "https://pocketyoga.com/assets/images/poses/upward_dog.png",
    name: "Upward-Facing Dog",
    sanskrit: "Ūrdhva Mukha Śvānāsana",
  },

  {
    id: 183,
    img: "https://pocketyoga.com/assets/images/poses/warrior_humble_R.png",
    name: "Warrior, Humble",
    sanskrit: "Baddha Vīrabhadrāsana",
  },

  {
    id: 184,
    img: "https://pocketyoga.com/assets/images/poses/warrior_I_R.png",
    name: "Warrior I",
    sanskrit: "Vīrabhadrāsana I",
  },

  {
    id: 185,
    img: "https://pocketyoga.com/assets/images/poses/warrior_II_R.png",
    name: "Warrior II",
    sanskrit: "Vīrabhadrāsana II",
  },

  {
    id: 186,
    img: "https://pocketyoga.com/assets/images/poses/warrior_III_R.png",
    name: "Warrior III",
    sanskrit: "Vīrabhadrāsana III",
  },

  {
    id: 187,
    img: "https://pocketyoga.com/assets/images/poses/warrior_II_reverse_R.png",
    name: "Warrior, Reverse",
    sanskrit: "Pārśva Vīrabhadrāsana",
  },

  {
    id: 188,
    img: "https://pocketyoga.com/assets/images/poses/wheel.png",
    name: "Wheel",
    sanskrit: "Ūrdhva Dhanurāsana",
  },

  {
    id: 189,
    img: "https://pocketyoga.com/assets/images/poses/wheel_leg_up_R.png",
    name: "Wheel, One Legged",
    sanskrit: "Eka Pāda Ūrdhva Dhanurāsana",
  },

  {
    id: 190,
    img:
      "https://pocketyoga.com/assets/images/poses/wide_legged_forward_bend_I_R.png",
    name: "Wide Legged Forward Bend I",
    sanskrit: "Prasārita Pādottānāsana I",
  },

  {
    id: 191,
    img:
      "https://pocketyoga.com/assets/images/poses/wide_legged_forward_bend_II_R.png",
    name: "Wide Legged Forward Bend II",
    sanskrit: "Prasārita Pādottānāsana II",
  },

  {
    id: 192,
    img:
      "https://pocketyoga.com/assets/images/poses/wide_legged_forward_bend_III_R.png",
    name: "Wide Legged Forward Bend III",
    sanskrit: "Prasārita Pādottānāsana III",
  },

  {
    id: 193,
    img:
      "https://pocketyoga.com/assets/images/poses/wide_legged_forward_bend_IV_R.png",
    name: "Wide Legged Forward Bend IV",
    sanskrit: "Prasārita Pādottānāsana IV",
  },

  {
    id: 194,
    img:
      "https://pocketyoga.com/assets/images/poses/seated_forward_bend_wide_angle.png",
    name: "Wide Legged Forward Bend, Seated",
    sanskrit: "Upaviṣṭa Koṇāsana",
  },

  {
    id: 195,
    img: "https://pocketyoga.com/assets/images/poses/wild_thing_L.png",
    name: "Wild Thing",
    sanskrit: "Camatkārāsana",
  },

  {
    id: 196,
    img: "https://pocketyoga.com/assets/images/poses/turtle.png",
    name: "Wind Removing",
    sanskrit: "Pavanamuktāsana",
  },

  {
    id: 197,
    img: "https://pocketyoga.com/assets/images/poses/turtle_head_tucked.png",
    name: "Wind Removing (Head Tucked)",
    sanskrit: "Pavanamuktāsana",
  },

  {
    id: 198,
    img: "https://pocketyoga.com/assets/images/poses/wind_removing_half_R.png",
    name: "Wind Removing, One Legged",
    sanskrit: "Eka Pāda Pavanamuktāsana",
  },
];

export default poses;
