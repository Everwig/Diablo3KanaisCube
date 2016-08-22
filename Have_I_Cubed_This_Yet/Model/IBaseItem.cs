namespace Have_I_Cubed_This_Yet.Model
{
    public interface IBaseItem
    {
        string ItemName { get; set; }
        string Affix { get; set; }
        bool IsCubedSeason { get; set; }
        bool IsCubedNonSeason { get; set; }
        bool IsStashed { get; set; }
    }
}
