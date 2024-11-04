class Solution {
public:
    int maximumNumberOfStringPairs(vector<string>& words) {
        unordered_map<string, int> freq;
        for (string& word : words) {
            sort(word.begin(), word.end());
            freq[word]++;
        }
        int ans = 0;
        for (auto& [word, cnt] : freq) {
            ans += cnt / 2;
        }
        return ans;
    }
};