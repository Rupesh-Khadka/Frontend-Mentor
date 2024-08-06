import React from 'react'
import ChallengesFirst from '../components/modules/Challenges/ChallengesFirst';
import ChallengSecound from '../components/modules/Challenges/ChallengSecound';
import ChallengesThird from '../components/modules/Challenges/ChallengesThird';

const Challenges = () => {
  return (
    <div class="bg-white">
    <ChallengesFirst/>
    <ChallengSecound />
    <ChallengesThird/>

   </div>
  )
}

export default Challenges;