namespace Have_I_Cubed_This_Yet.Model
{
    public class BaseItem : IBaseItem
    {
        public string ItemName { get; set; }
        public string Affix { get; set; }
        public bool IsCubedSeason { get; set; }
        public bool IsCubedNonSeason { get; set; }
        public bool IsStashed { get; set; }
    }
}
