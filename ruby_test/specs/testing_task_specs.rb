require("minitest/autorun")
require("minitest/rg")
require_relative("../testing_task_2.rb")
require("pry-byebug")
require_relative('../card.rb')

class CardGameTest < MiniTest::Test

def setup
@card1 = Card.new("Clubs", 1)
@card2 = Card.new("Hearts", 2)
@card3 = Card.new("Spades", 3)
@card_game= CardGame.new
@cards = [@card1, @card2]
end

def test_checkforace_expecting_true
  assert_equal(true, @card_game.checkforace(@card1))
end

def test_checkforace_expecting_false
  assert_equal(false, @card_game.checkforace(@card2))
end

def test_highest_card_expecting_Hearts
  assert_equal("Hearts", @card_game.highest_card(@card1, @card2))
end

def test_highest_card_expecting_Spades
  assert_equal("Spades", @card_game.highest_card(@card1, @card3))
end

def test_cards_total_expecting_you_have_a_total_of_3
  assert_equal("You have a total of 3", @card_game.cards_total(@cards))
end

end
