# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-gitlab.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-gitlab.group.Group"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group gitlab_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.Group.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new Group(Construct Scope, string Id, GroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupConfig">GroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupConfig">GroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.group.Group.putDefaultBranchProtectionDefaults">PutDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.putPushRules">PutPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAllowedEmailDomainsList">ResetAllowedEmailDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled">ResetAutoDevopsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatar">ResetAvatar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatarHash">ResetAvatarHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranch">ResetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection">ResetDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtectionDefaults">ResetDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetEmailsEnabled">ResetEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit">ResetExtraSharedRunnersMinutesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges">ResetIpRestrictionRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetLfsEnabled">ResetLfsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMembershipLock">ResetMembershipLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMentionsDisabled">ResetMentionsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetParentId">ResetParentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPermanentlyRemoveOnDelete">ResetPermanentlyRemoveOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup">ResetPreventForkingOutsideGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel">ResetProjectCreationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPushRules">ResetPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled">ResetRequestAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication">ResetRequireTwoFactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit">ResetSharedRunnersMinutesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSharedRunnersSetting">ResetSharedRunnersSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock">ResetShareWithGroupLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel">ResetSubgroupCreationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod">ResetTwoFactorGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetVisibilityLevel">ResetVisibilityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetWikiAccessLevel">ResetWikiAccessLevel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.group.Group.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.group.Group.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.group.Group.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.group.Group.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.group.Group.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.group.Group.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.group.Group.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.group.Group.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.group.Group.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.group.Group.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.group.Group.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.group.Group.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.group.Group.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.group.Group.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.group.Group.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.group.Group.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.group.Group.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.group.Group.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.group.Group.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.group.Group.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.group.Group.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.group.Group.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.group.Group.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.group.Group.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.group.Group.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.group.Group.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultBranchProtectionDefaults` <a name="PutDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.Group.putDefaultBranchProtectionDefaults"></a>

```csharp
private void PutDefaultBranchProtectionDefaults(GroupDefaultBranchProtectionDefaults Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.group.Group.putDefaultBranchProtectionDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

---

##### `PutPushRules` <a name="PutPushRules" id="@cdktf/provider-gitlab.group.Group.putPushRules"></a>

```csharp
private void PutPushRules(GroupPushRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

---

##### `ResetAllowedEmailDomainsList` <a name="ResetAllowedEmailDomainsList" id="@cdktf/provider-gitlab.group.Group.resetAllowedEmailDomainsList"></a>

```csharp
private void ResetAllowedEmailDomainsList()
```

##### `ResetAutoDevopsEnabled` <a name="ResetAutoDevopsEnabled" id="@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled"></a>

```csharp
private void ResetAutoDevopsEnabled()
```

##### `ResetAvatar` <a name="ResetAvatar" id="@cdktf/provider-gitlab.group.Group.resetAvatar"></a>

```csharp
private void ResetAvatar()
```

##### `ResetAvatarHash` <a name="ResetAvatarHash" id="@cdktf/provider-gitlab.group.Group.resetAvatarHash"></a>

```csharp
private void ResetAvatarHash()
```

##### `ResetDefaultBranch` <a name="ResetDefaultBranch" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranch"></a>

```csharp
private void ResetDefaultBranch()
```

##### `ResetDefaultBranchProtection` <a name="ResetDefaultBranchProtection" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection"></a>

```csharp
private void ResetDefaultBranchProtection()
```

##### `ResetDefaultBranchProtectionDefaults` <a name="ResetDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtectionDefaults"></a>

```csharp
private void ResetDefaultBranchProtectionDefaults()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.group.Group.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEmailsEnabled` <a name="ResetEmailsEnabled" id="@cdktf/provider-gitlab.group.Group.resetEmailsEnabled"></a>

```csharp
private void ResetEmailsEnabled()
```

##### `ResetExtraSharedRunnersMinutesLimit` <a name="ResetExtraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit"></a>

```csharp
private void ResetExtraSharedRunnersMinutesLimit()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.group.Group.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpRestrictionRanges` <a name="ResetIpRestrictionRanges" id="@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges"></a>

```csharp
private void ResetIpRestrictionRanges()
```

##### `ResetLfsEnabled` <a name="ResetLfsEnabled" id="@cdktf/provider-gitlab.group.Group.resetLfsEnabled"></a>

```csharp
private void ResetLfsEnabled()
```

##### `ResetMembershipLock` <a name="ResetMembershipLock" id="@cdktf/provider-gitlab.group.Group.resetMembershipLock"></a>

```csharp
private void ResetMembershipLock()
```

##### `ResetMentionsDisabled` <a name="ResetMentionsDisabled" id="@cdktf/provider-gitlab.group.Group.resetMentionsDisabled"></a>

```csharp
private void ResetMentionsDisabled()
```

##### `ResetParentId` <a name="ResetParentId" id="@cdktf/provider-gitlab.group.Group.resetParentId"></a>

```csharp
private void ResetParentId()
```

##### `ResetPermanentlyRemoveOnDelete` <a name="ResetPermanentlyRemoveOnDelete" id="@cdktf/provider-gitlab.group.Group.resetPermanentlyRemoveOnDelete"></a>

```csharp
private void ResetPermanentlyRemoveOnDelete()
```

##### `ResetPreventForkingOutsideGroup` <a name="ResetPreventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup"></a>

```csharp
private void ResetPreventForkingOutsideGroup()
```

##### `ResetProjectCreationLevel` <a name="ResetProjectCreationLevel" id="@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel"></a>

```csharp
private void ResetProjectCreationLevel()
```

##### `ResetPushRules` <a name="ResetPushRules" id="@cdktf/provider-gitlab.group.Group.resetPushRules"></a>

```csharp
private void ResetPushRules()
```

##### `ResetRequestAccessEnabled` <a name="ResetRequestAccessEnabled" id="@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled"></a>

```csharp
private void ResetRequestAccessEnabled()
```

##### `ResetRequireTwoFactorAuthentication` <a name="ResetRequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication"></a>

```csharp
private void ResetRequireTwoFactorAuthentication()
```

##### `ResetSharedRunnersMinutesLimit` <a name="ResetSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit"></a>

```csharp
private void ResetSharedRunnersMinutesLimit()
```

##### `ResetSharedRunnersSetting` <a name="ResetSharedRunnersSetting" id="@cdktf/provider-gitlab.group.Group.resetSharedRunnersSetting"></a>

```csharp
private void ResetSharedRunnersSetting()
```

##### `ResetShareWithGroupLock` <a name="ResetShareWithGroupLock" id="@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock"></a>

```csharp
private void ResetShareWithGroupLock()
```

##### `ResetSubgroupCreationLevel` <a name="ResetSubgroupCreationLevel" id="@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel"></a>

```csharp
private void ResetSubgroupCreationLevel()
```

##### `ResetTwoFactorGracePeriod` <a name="ResetTwoFactorGracePeriod" id="@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod"></a>

```csharp
private void ResetTwoFactorGracePeriod()
```

##### `ResetVisibilityLevel` <a name="ResetVisibilityLevel" id="@cdktf/provider-gitlab.group.Group.resetVisibilityLevel"></a>

```csharp
private void ResetVisibilityLevel()
```

##### `ResetWikiAccessLevel` <a name="ResetWikiAccessLevel" id="@cdktf/provider-gitlab.group.Group.resetWikiAccessLevel"></a>

```csharp
private void ResetWikiAccessLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.group.Group.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

Group.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.group.Group.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.group.Group.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

Group.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.group.Group.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

Group.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

Group.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Group to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Group that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Group to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarUrl">AvatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaults">DefaultBranchProtectionDefaults</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference">GroupDefaultBranchProtectionDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullPath">FullPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pushRules">PushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference">GroupPushRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.runnersToken">RunnersToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.allowedEmailDomainsListInput">AllowedEmailDomainsListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput">AutoDevopsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHashInput">AvatarHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarInput">AvatarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchInput">DefaultBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaultsInput">DefaultBranchProtectionDefaultsInput</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput">DefaultBranchProtectionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsEnabledInput">EmailsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput">ExtraSharedRunnersMinutesLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput">IpRestrictionRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput">LfsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLockInput">MembershipLockInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput">MentionsDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentIdInput">ParentIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDeleteInput">PermanentlyRemoveOnDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput">PreventForkingOutsideGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput">ProjectCreationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pushRulesInput">PushRulesInput</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput">RequestAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput">RequireTwoFactorAuthenticationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput">SharedRunnersMinutesLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersSettingInput">SharedRunnersSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput">ShareWithGroupLockInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput">SubgroupCreationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput">TwoFactorGracePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput">VisibilityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.wikiAccessLevelInput">WikiAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.allowedEmailDomainsList">AllowedEmailDomainsList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatar">Avatar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHash">AvatarHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranch">DefaultBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection">DefaultBranchProtection</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsEnabled">EmailsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit">ExtraSharedRunnersMinutesLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges">IpRestrictionRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabled">LfsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLock">MembershipLock</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabled">MentionsDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentId">ParentId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDelete">PermanentlyRemoveOnDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup">PreventForkingOutsideGroup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevel">ProjectCreationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication">RequireTwoFactorAuthentication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit">SharedRunnersMinutesLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersSetting">SharedRunnersSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock">ShareWithGroupLock</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel">SubgroupCreationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod">TwoFactorGracePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevel">VisibilityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.wikiAccessLevel">WikiAccessLevel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.group.Group.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.group.Group.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.group.Group.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.group.Group.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.group.Group.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.group.Group.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.group.Group.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.group.Group.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.group.Group.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.group.Group.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.group.Group.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.group.Group.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.group.Group.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.group.Group.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.group.Group.property.avatarUrl"></a>

```csharp
public string AvatarUrl { get; }
```

- *Type:* string

---

##### `DefaultBranchProtectionDefaults`<sup>Required</sup> <a name="DefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaults"></a>

```csharp
public GroupDefaultBranchProtectionDefaultsOutputReference DefaultBranchProtectionDefaults { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference">GroupDefaultBranchProtectionDefaultsOutputReference</a>

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-gitlab.group.Group.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `FullPath`<sup>Required</sup> <a name="FullPath" id="@cdktf/provider-gitlab.group.Group.property.fullPath"></a>

```csharp
public string FullPath { get; }
```

- *Type:* string

---

##### `PushRules`<sup>Required</sup> <a name="PushRules" id="@cdktf/provider-gitlab.group.Group.property.pushRules"></a>

```csharp
public GroupPushRulesOutputReference PushRules { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference">GroupPushRulesOutputReference</a>

---

##### `RunnersToken`<sup>Required</sup> <a name="RunnersToken" id="@cdktf/provider-gitlab.group.Group.property.runnersToken"></a>

```csharp
public string RunnersToken { get; }
```

- *Type:* string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.group.Group.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `AllowedEmailDomainsListInput`<sup>Optional</sup> <a name="AllowedEmailDomainsListInput" id="@cdktf/provider-gitlab.group.Group.property.allowedEmailDomainsListInput"></a>

```csharp
public string[] AllowedEmailDomainsListInput { get; }
```

- *Type:* string[]

---

##### `AutoDevopsEnabledInput`<sup>Optional</sup> <a name="AutoDevopsEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput"></a>

```csharp
public object AutoDevopsEnabledInput { get; }
```

- *Type:* object

---

##### `AvatarHashInput`<sup>Optional</sup> <a name="AvatarHashInput" id="@cdktf/provider-gitlab.group.Group.property.avatarHashInput"></a>

```csharp
public string AvatarHashInput { get; }
```

- *Type:* string

---

##### `AvatarInput`<sup>Optional</sup> <a name="AvatarInput" id="@cdktf/provider-gitlab.group.Group.property.avatarInput"></a>

```csharp
public string AvatarInput { get; }
```

- *Type:* string

---

##### `DefaultBranchInput`<sup>Optional</sup> <a name="DefaultBranchInput" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchInput"></a>

```csharp
public string DefaultBranchInput { get; }
```

- *Type:* string

---

##### `DefaultBranchProtectionDefaultsInput`<sup>Optional</sup> <a name="DefaultBranchProtectionDefaultsInput" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaultsInput"></a>

```csharp
public GroupDefaultBranchProtectionDefaults DefaultBranchProtectionDefaultsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

---

##### `DefaultBranchProtectionInput`<sup>Optional</sup> <a name="DefaultBranchProtectionInput" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput"></a>

```csharp
public double DefaultBranchProtectionInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.group.Group.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EmailsEnabledInput`<sup>Optional</sup> <a name="EmailsEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.emailsEnabledInput"></a>

```csharp
public object EmailsEnabledInput { get; }
```

- *Type:* object

---

##### `ExtraSharedRunnersMinutesLimitInput`<sup>Optional</sup> <a name="ExtraSharedRunnersMinutesLimitInput" id="@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput"></a>

```csharp
public double ExtraSharedRunnersMinutesLimitInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.group.Group.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpRestrictionRangesInput`<sup>Optional</sup> <a name="IpRestrictionRangesInput" id="@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput"></a>

```csharp
public string[] IpRestrictionRangesInput { get; }
```

- *Type:* string[]

---

##### `LfsEnabledInput`<sup>Optional</sup> <a name="LfsEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput"></a>

```csharp
public object LfsEnabledInput { get; }
```

- *Type:* object

---

##### `MembershipLockInput`<sup>Optional</sup> <a name="MembershipLockInput" id="@cdktf/provider-gitlab.group.Group.property.membershipLockInput"></a>

```csharp
public object MembershipLockInput { get; }
```

- *Type:* object

---

##### `MentionsDisabledInput`<sup>Optional</sup> <a name="MentionsDisabledInput" id="@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput"></a>

```csharp
public object MentionsDisabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.group.Group.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktf/provider-gitlab.group.Group.property.parentIdInput"></a>

```csharp
public double ParentIdInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-gitlab.group.Group.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PermanentlyRemoveOnDeleteInput`<sup>Optional</sup> <a name="PermanentlyRemoveOnDeleteInput" id="@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDeleteInput"></a>

```csharp
public object PermanentlyRemoveOnDeleteInput { get; }
```

- *Type:* object

---

##### `PreventForkingOutsideGroupInput`<sup>Optional</sup> <a name="PreventForkingOutsideGroupInput" id="@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput"></a>

```csharp
public object PreventForkingOutsideGroupInput { get; }
```

- *Type:* object

---

##### `ProjectCreationLevelInput`<sup>Optional</sup> <a name="ProjectCreationLevelInput" id="@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput"></a>

```csharp
public string ProjectCreationLevelInput { get; }
```

- *Type:* string

---

##### `PushRulesInput`<sup>Optional</sup> <a name="PushRulesInput" id="@cdktf/provider-gitlab.group.Group.property.pushRulesInput"></a>

```csharp
public GroupPushRules PushRulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

---

##### `RequestAccessEnabledInput`<sup>Optional</sup> <a name="RequestAccessEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput"></a>

```csharp
public object RequestAccessEnabledInput { get; }
```

- *Type:* object

---

##### `RequireTwoFactorAuthenticationInput`<sup>Optional</sup> <a name="RequireTwoFactorAuthenticationInput" id="@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput"></a>

```csharp
public object RequireTwoFactorAuthenticationInput { get; }
```

- *Type:* object

---

##### `SharedRunnersMinutesLimitInput`<sup>Optional</sup> <a name="SharedRunnersMinutesLimitInput" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput"></a>

```csharp
public double SharedRunnersMinutesLimitInput { get; }
```

- *Type:* double

---

##### `SharedRunnersSettingInput`<sup>Optional</sup> <a name="SharedRunnersSettingInput" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersSettingInput"></a>

```csharp
public string SharedRunnersSettingInput { get; }
```

- *Type:* string

---

##### `ShareWithGroupLockInput`<sup>Optional</sup> <a name="ShareWithGroupLockInput" id="@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput"></a>

```csharp
public object ShareWithGroupLockInput { get; }
```

- *Type:* object

---

##### `SubgroupCreationLevelInput`<sup>Optional</sup> <a name="SubgroupCreationLevelInput" id="@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput"></a>

```csharp
public string SubgroupCreationLevelInput { get; }
```

- *Type:* string

---

##### `TwoFactorGracePeriodInput`<sup>Optional</sup> <a name="TwoFactorGracePeriodInput" id="@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput"></a>

```csharp
public double TwoFactorGracePeriodInput { get; }
```

- *Type:* double

---

##### `VisibilityLevelInput`<sup>Optional</sup> <a name="VisibilityLevelInput" id="@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput"></a>

```csharp
public string VisibilityLevelInput { get; }
```

- *Type:* string

---

##### `WikiAccessLevelInput`<sup>Optional</sup> <a name="WikiAccessLevelInput" id="@cdktf/provider-gitlab.group.Group.property.wikiAccessLevelInput"></a>

```csharp
public string WikiAccessLevelInput { get; }
```

- *Type:* string

---

##### `AllowedEmailDomainsList`<sup>Required</sup> <a name="AllowedEmailDomainsList" id="@cdktf/provider-gitlab.group.Group.property.allowedEmailDomainsList"></a>

```csharp
public string[] AllowedEmailDomainsList { get; }
```

- *Type:* string[]

---

##### `AutoDevopsEnabled`<sup>Required</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled"></a>

```csharp
public object AutoDevopsEnabled { get; }
```

- *Type:* object

---

##### `Avatar`<sup>Required</sup> <a name="Avatar" id="@cdktf/provider-gitlab.group.Group.property.avatar"></a>

```csharp
public string Avatar { get; }
```

- *Type:* string

---

##### `AvatarHash`<sup>Required</sup> <a name="AvatarHash" id="@cdktf/provider-gitlab.group.Group.property.avatarHash"></a>

```csharp
public string AvatarHash { get; }
```

- *Type:* string

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktf/provider-gitlab.group.Group.property.defaultBranch"></a>

```csharp
public string DefaultBranch { get; }
```

- *Type:* string

---

##### `DefaultBranchProtection`<sup>Required</sup> <a name="DefaultBranchProtection" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection"></a>

```csharp
public double DefaultBranchProtection { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.group.Group.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EmailsEnabled`<sup>Required</sup> <a name="EmailsEnabled" id="@cdktf/provider-gitlab.group.Group.property.emailsEnabled"></a>

```csharp
public object EmailsEnabled { get; }
```

- *Type:* object

---

##### `ExtraSharedRunnersMinutesLimit`<sup>Required</sup> <a name="ExtraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit"></a>

```csharp
public double ExtraSharedRunnersMinutesLimit { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.group.Group.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpRestrictionRanges`<sup>Required</sup> <a name="IpRestrictionRanges" id="@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges"></a>

```csharp
public string[] IpRestrictionRanges { get; }
```

- *Type:* string[]

---

##### `LfsEnabled`<sup>Required</sup> <a name="LfsEnabled" id="@cdktf/provider-gitlab.group.Group.property.lfsEnabled"></a>

```csharp
public object LfsEnabled { get; }
```

- *Type:* object

---

##### `MembershipLock`<sup>Required</sup> <a name="MembershipLock" id="@cdktf/provider-gitlab.group.Group.property.membershipLock"></a>

```csharp
public object MembershipLock { get; }
```

- *Type:* object

---

##### `MentionsDisabled`<sup>Required</sup> <a name="MentionsDisabled" id="@cdktf/provider-gitlab.group.Group.property.mentionsDisabled"></a>

```csharp
public object MentionsDisabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.group.Group.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-gitlab.group.Group.property.parentId"></a>

```csharp
public double ParentId { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.group.Group.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PermanentlyRemoveOnDelete`<sup>Required</sup> <a name="PermanentlyRemoveOnDelete" id="@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDelete"></a>

```csharp
public object PermanentlyRemoveOnDelete { get; }
```

- *Type:* object

---

##### `PreventForkingOutsideGroup`<sup>Required</sup> <a name="PreventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup"></a>

```csharp
public object PreventForkingOutsideGroup { get; }
```

- *Type:* object

---

##### `ProjectCreationLevel`<sup>Required</sup> <a name="ProjectCreationLevel" id="@cdktf/provider-gitlab.group.Group.property.projectCreationLevel"></a>

```csharp
public string ProjectCreationLevel { get; }
```

- *Type:* string

---

##### `RequestAccessEnabled`<sup>Required</sup> <a name="RequestAccessEnabled" id="@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled"></a>

```csharp
public object RequestAccessEnabled { get; }
```

- *Type:* object

---

##### `RequireTwoFactorAuthentication`<sup>Required</sup> <a name="RequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication"></a>

```csharp
public object RequireTwoFactorAuthentication { get; }
```

- *Type:* object

---

##### `SharedRunnersMinutesLimit`<sup>Required</sup> <a name="SharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit"></a>

```csharp
public double SharedRunnersMinutesLimit { get; }
```

- *Type:* double

---

##### `SharedRunnersSetting`<sup>Required</sup> <a name="SharedRunnersSetting" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersSetting"></a>

```csharp
public string SharedRunnersSetting { get; }
```

- *Type:* string

---

##### `ShareWithGroupLock`<sup>Required</sup> <a name="ShareWithGroupLock" id="@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock"></a>

```csharp
public object ShareWithGroupLock { get; }
```

- *Type:* object

---

##### `SubgroupCreationLevel`<sup>Required</sup> <a name="SubgroupCreationLevel" id="@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel"></a>

```csharp
public string SubgroupCreationLevel { get; }
```

- *Type:* string

---

##### `TwoFactorGracePeriod`<sup>Required</sup> <a name="TwoFactorGracePeriod" id="@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod"></a>

```csharp
public double TwoFactorGracePeriod { get; }
```

- *Type:* double

---

##### `VisibilityLevel`<sup>Required</sup> <a name="VisibilityLevel" id="@cdktf/provider-gitlab.group.Group.property.visibilityLevel"></a>

```csharp
public string VisibilityLevel { get; }
```

- *Type:* string

---

##### `WikiAccessLevel`<sup>Required</sup> <a name="WikiAccessLevel" id="@cdktf/provider-gitlab.group.Group.property.wikiAccessLevel"></a>

```csharp
public string WikiAccessLevel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.group.Group.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupConfig <a name="GroupConfig" id="@cdktf/provider-gitlab.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Path,
    string[] AllowedEmailDomainsList = null,
    object AutoDevopsEnabled = null,
    string Avatar = null,
    string AvatarHash = null,
    string DefaultBranch = null,
    double DefaultBranchProtection = null,
    GroupDefaultBranchProtectionDefaults DefaultBranchProtectionDefaults = null,
    string Description = null,
    object EmailsEnabled = null,
    double ExtraSharedRunnersMinutesLimit = null,
    string Id = null,
    string[] IpRestrictionRanges = null,
    object LfsEnabled = null,
    object MembershipLock = null,
    object MentionsDisabled = null,
    double ParentId = null,
    object PermanentlyRemoveOnDelete = null,
    object PreventForkingOutsideGroup = null,
    string ProjectCreationLevel = null,
    GroupPushRules PushRules = null,
    object RequestAccessEnabled = null,
    object RequireTwoFactorAuthentication = null,
    double SharedRunnersMinutesLimit = null,
    string SharedRunnersSetting = null,
    object ShareWithGroupLock = null,
    string SubgroupCreationLevel = null,
    double TwoFactorGracePeriod = null,
    string VisibilityLevel = null,
    string WikiAccessLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.name">Name</a></code> | <code>string</code> | The name of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.path">Path</a></code> | <code>string</code> | The path of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.allowedEmailDomainsList">AllowedEmailDomainsList</a></code> | <code>string[]</code> | A list of email address domains to allow group access. Will be concatenated together into a comma separated string. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>object</code> | Default to Auto DevOps pipeline for all projects within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatar">Avatar</a></code> | <code>string</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash">AvatarHash</a></code> | <code>string</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranch">DefaultBranch</a></code> | <code>string</code> | Initial default branch name. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection">DefaultBranchProtection</a></code> | <code>double</code> | See https://docs.gitlab.com/api/groups/#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtectionDefaults">DefaultBranchProtectionDefaults</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a></code> | default_branch_protection_defaults block. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.description">Description</a></code> | <code>string</code> | The group's description. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.emailsEnabled">EmailsEnabled</a></code> | <code>object</code> | Enable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit">ExtraSharedRunnersMinutesLimit</a></code> | <code>double</code> | Can be set by administrators only. Additional CI/CD minutes for this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges">IpRestrictionRanges</a></code> | <code>string[]</code> | A list of IP addresses or subnet masks to restrict group access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled">LfsEnabled</a></code> | <code>object</code> | Enable/disable Large File Storage (LFS) for the projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock">MembershipLock</a></code> | <code>object</code> | Users cannot be added to projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled">MentionsDisabled</a></code> | <code>object</code> | Disable the capability of a group from getting mentioned. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.parentId">ParentId</a></code> | <code>double</code> | Id of the parent group (creates a nested group). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.permanentlyRemoveOnDelete">PermanentlyRemoveOnDelete</a></code> | <code>object</code> | Whether the group should be permanently removed during a `delete` operation. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup">PreventForkingOutsideGroup</a></code> | <code>object</code> | Defaults to false. When enabled, users can not fork projects from this group to external namespaces. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel">ProjectCreationLevel</a></code> | <code>string</code> | Determine if developers can create projects in the group. Valid values are: `noone`, `owner`, `maintainer`, `developer`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.pushRules">PushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | push_rules block. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>object</code> | Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication">RequireTwoFactorAuthentication</a></code> | <code>object</code> | Require all users in this group to setup Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit">SharedRunnersMinutesLimit</a></code> | <code>double</code> | Can be set by administrators only. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersSetting">SharedRunnersSetting</a></code> | <code>string</code> | Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock">ShareWithGroupLock</a></code> | <code>object</code> | Prevent sharing a project with another group within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel">SubgroupCreationLevel</a></code> | <code>string</code> | Allowed to create subgroups. Valid values are: `owner`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod">TwoFactorGracePeriod</a></code> | <code>double</code> | Defaults to 48. Time before Two-factor authentication is enforced (in hours). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel">VisibilityLevel</a></code> | <code>string</code> | The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.wikiAccessLevel">WikiAccessLevel</a></code> | <code>string</code> | The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.group.GroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.group.GroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.group.GroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.group.GroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.group.GroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.group.GroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#name Group#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.group.GroupConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#path Group#path}

---

##### `AllowedEmailDomainsList`<sup>Optional</sup> <a name="AllowedEmailDomainsList" id="@cdktf/provider-gitlab.group.GroupConfig.property.allowedEmailDomainsList"></a>

```csharp
public string[] AllowedEmailDomainsList { get; set; }
```

- *Type:* string[]

A list of email address domains to allow group access. Will be concatenated together into a comma separated string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#allowed_email_domains_list Group#allowed_email_domains_list}

---

##### `AutoDevopsEnabled`<sup>Optional</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled"></a>

```csharp
public object AutoDevopsEnabled { get; set; }
```

- *Type:* object

Default to Auto DevOps pipeline for all projects within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#auto_devops_enabled Group#auto_devops_enabled}

---

##### `Avatar`<sup>Optional</sup> <a name="Avatar" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatar"></a>

```csharp
public string Avatar { get; set; }
```

- *Type:* string

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#avatar Group#avatar}

---

##### `AvatarHash`<sup>Optional</sup> <a name="AvatarHash" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash"></a>

```csharp
public string AvatarHash { get; set; }
```

- *Type:* string

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#avatar_hash Group#avatar_hash}

---

##### `DefaultBranch`<sup>Optional</sup> <a name="DefaultBranch" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranch"></a>

```csharp
public string DefaultBranch { get; set; }
```

- *Type:* string

Initial default branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#default_branch Group#default_branch}

---

##### `DefaultBranchProtection`<sup>Optional</sup> <a name="DefaultBranchProtection" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection"></a>

```csharp
public double DefaultBranchProtection { get; set; }
```

- *Type:* double

See https://docs.gitlab.com/api/groups/#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#default_branch_protection Group#default_branch_protection}

---

##### `DefaultBranchProtectionDefaults`<sup>Optional</sup> <a name="DefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtectionDefaults"></a>

```csharp
public GroupDefaultBranchProtectionDefaults DefaultBranchProtectionDefaults { get; set; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

default_branch_protection_defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#default_branch_protection_defaults Group#default_branch_protection_defaults}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.group.GroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The group's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#description Group#description}

---

##### `EmailsEnabled`<sup>Optional</sup> <a name="EmailsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.emailsEnabled"></a>

```csharp
public object EmailsEnabled { get; set; }
```

- *Type:* object

Enable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#emails_enabled Group#emails_enabled}

---

##### `ExtraSharedRunnersMinutesLimit`<sup>Optional</sup> <a name="ExtraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit"></a>

```csharp
public double ExtraSharedRunnersMinutesLimit { get; set; }
```

- *Type:* double

Can be set by administrators only. Additional CI/CD minutes for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#extra_shared_runners_minutes_limit Group#extra_shared_runners_minutes_limit}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.group.GroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpRestrictionRanges`<sup>Optional</sup> <a name="IpRestrictionRanges" id="@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges"></a>

```csharp
public string[] IpRestrictionRanges { get; set; }
```

- *Type:* string[]

A list of IP addresses or subnet masks to restrict group access.

Will be concatenated together into a comma separated string. Only allowed on top level groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#ip_restriction_ranges Group#ip_restriction_ranges}

---

##### `LfsEnabled`<sup>Optional</sup> <a name="LfsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled"></a>

```csharp
public object LfsEnabled { get; set; }
```

- *Type:* object

Enable/disable Large File Storage (LFS) for the projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#lfs_enabled Group#lfs_enabled}

---

##### `MembershipLock`<sup>Optional</sup> <a name="MembershipLock" id="@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock"></a>

```csharp
public object MembershipLock { get; set; }
```

- *Type:* object

Users cannot be added to projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#membership_lock Group#membership_lock}

---

##### `MentionsDisabled`<sup>Optional</sup> <a name="MentionsDisabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled"></a>

```csharp
public object MentionsDisabled { get; set; }
```

- *Type:* object

Disable the capability of a group from getting mentioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#mentions_disabled Group#mentions_disabled}

---

##### `ParentId`<sup>Optional</sup> <a name="ParentId" id="@cdktf/provider-gitlab.group.GroupConfig.property.parentId"></a>

```csharp
public double ParentId { get; set; }
```

- *Type:* double

Id of the parent group (creates a nested group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#parent_id Group#parent_id}

---

##### `PermanentlyRemoveOnDelete`<sup>Optional</sup> <a name="PermanentlyRemoveOnDelete" id="@cdktf/provider-gitlab.group.GroupConfig.property.permanentlyRemoveOnDelete"></a>

```csharp
public object PermanentlyRemoveOnDelete { get; set; }
```

- *Type:* object

Whether the group should be permanently removed during a `delete` operation.

This only works with subgroups. Must be configured via an `apply` before the `destroy` is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#permanently_remove_on_delete Group#permanently_remove_on_delete}

---

##### `PreventForkingOutsideGroup`<sup>Optional</sup> <a name="PreventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup"></a>

```csharp
public object PreventForkingOutsideGroup { get; set; }
```

- *Type:* object

Defaults to false. When enabled, users can not fork projects from this group to external namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#prevent_forking_outside_group Group#prevent_forking_outside_group}

---

##### `ProjectCreationLevel`<sup>Optional</sup> <a name="ProjectCreationLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel"></a>

```csharp
public string ProjectCreationLevel { get; set; }
```

- *Type:* string

Determine if developers can create projects in the group. Valid values are: `noone`, `owner`, `maintainer`, `developer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#project_creation_level Group#project_creation_level}

---

##### `PushRules`<sup>Optional</sup> <a name="PushRules" id="@cdktf/provider-gitlab.group.GroupConfig.property.pushRules"></a>

```csharp
public GroupPushRules PushRules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

push_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#push_rules Group#push_rules}

---

##### `RequestAccessEnabled`<sup>Optional</sup> <a name="RequestAccessEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled"></a>

```csharp
public object RequestAccessEnabled { get; set; }
```

- *Type:* object

Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#request_access_enabled Group#request_access_enabled}

---

##### `RequireTwoFactorAuthentication`<sup>Optional</sup> <a name="RequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication"></a>

```csharp
public object RequireTwoFactorAuthentication { get; set; }
```

- *Type:* object

Require all users in this group to setup Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#require_two_factor_authentication Group#require_two_factor_authentication}

---

##### `SharedRunnersMinutesLimit`<sup>Optional</sup> <a name="SharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit"></a>

```csharp
public double SharedRunnersMinutesLimit { get; set; }
```

- *Type:* double

Can be set by administrators only.

Maximum number of monthly CI/CD minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#shared_runners_minutes_limit Group#shared_runners_minutes_limit}

---

##### `SharedRunnersSetting`<sup>Optional</sup> <a name="SharedRunnersSetting" id="@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersSetting"></a>

```csharp
public string SharedRunnersSetting { get; set; }
```

- *Type:* string

Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#shared_runners_setting Group#shared_runners_setting}

---

##### `ShareWithGroupLock`<sup>Optional</sup> <a name="ShareWithGroupLock" id="@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock"></a>

```csharp
public object ShareWithGroupLock { get; set; }
```

- *Type:* object

Prevent sharing a project with another group within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#share_with_group_lock Group#share_with_group_lock}

---

##### `SubgroupCreationLevel`<sup>Optional</sup> <a name="SubgroupCreationLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel"></a>

```csharp
public string SubgroupCreationLevel { get; set; }
```

- *Type:* string

Allowed to create subgroups. Valid values are: `owner`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#subgroup_creation_level Group#subgroup_creation_level}

---

##### `TwoFactorGracePeriod`<sup>Optional</sup> <a name="TwoFactorGracePeriod" id="@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod"></a>

```csharp
public double TwoFactorGracePeriod { get; set; }
```

- *Type:* double

Defaults to 48. Time before Two-factor authentication is enforced (in hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#two_factor_grace_period Group#two_factor_grace_period}

---

##### `VisibilityLevel`<sup>Optional</sup> <a name="VisibilityLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel"></a>

```csharp
public string VisibilityLevel { get; set; }
```

- *Type:* string

The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#visibility_level Group#visibility_level}

---

##### `WikiAccessLevel`<sup>Optional</sup> <a name="WikiAccessLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.wikiAccessLevel"></a>

```csharp
public string WikiAccessLevel { get; set; }
```

- *Type:* string

The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#wiki_access_level Group#wiki_access_level}

---

### GroupDefaultBranchProtectionDefaults <a name="GroupDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GroupDefaultBranchProtectionDefaults {
    string[] AllowedToMerge = null,
    string[] AllowedToPush = null,
    object AllowForcePush = null,
    object DeveloperCanInitialPush = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToMerge">AllowedToMerge</a></code> | <code>string[]</code> | An array of access levels allowed to merge. Valid values are: `developer`, `maintainer`, `no one`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToPush">AllowedToPush</a></code> | <code>string[]</code> | An array of access levels allowed to push. Valid values are: `developer`, `maintainer`, `no one`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowForcePush">AllowForcePush</a></code> | <code>object</code> | Allow force push for all users with push access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.developerCanInitialPush">DeveloperCanInitialPush</a></code> | <code>object</code> | Allow developers to initial push. |

---

##### `AllowedToMerge`<sup>Optional</sup> <a name="AllowedToMerge" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToMerge"></a>

```csharp
public string[] AllowedToMerge { get; set; }
```

- *Type:* string[]

An array of access levels allowed to merge. Valid values are: `developer`, `maintainer`, `no one`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#allowed_to_merge Group#allowed_to_merge}

---

##### `AllowedToPush`<sup>Optional</sup> <a name="AllowedToPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToPush"></a>

```csharp
public string[] AllowedToPush { get; set; }
```

- *Type:* string[]

An array of access levels allowed to push. Valid values are: `developer`, `maintainer`, `no one`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#allowed_to_push Group#allowed_to_push}

---

##### `AllowForcePush`<sup>Optional</sup> <a name="AllowForcePush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowForcePush"></a>

```csharp
public object AllowForcePush { get; set; }
```

- *Type:* object

Allow force push for all users with push access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#allow_force_push Group#allow_force_push}

---

##### `DeveloperCanInitialPush`<sup>Optional</sup> <a name="DeveloperCanInitialPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.developerCanInitialPush"></a>

```csharp
public object DeveloperCanInitialPush { get; set; }
```

- *Type:* object

Allow developers to initial push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#developer_can_initial_push Group#developer_can_initial_push}

---

### GroupPushRules <a name="GroupPushRules" id="@cdktf/provider-gitlab.group.GroupPushRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupPushRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GroupPushRules {
    string AuthorEmailRegex = null,
    string BranchNameRegex = null,
    object CommitCommitterCheck = null,
    object CommitCommitterNameCheck = null,
    string CommitMessageNegativeRegex = null,
    string CommitMessageRegex = null,
    object DenyDeleteTag = null,
    string FileNameRegex = null,
    double MaxFileSize = null,
    object MemberCheck = null,
    object PreventSecrets = null,
    object RejectNonDcoCommits = null,
    object RejectUnsignedCommits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.authorEmailRegex">AuthorEmailRegex</a></code> | <code>string</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.branchNameRegex">BranchNameRegex</a></code> | <code>string</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterCheck">CommitCommitterCheck</a></code> | <code>object</code> | Only commits pushed using verified emails are allowed. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterNameCheck">CommitCommitterNameCheck</a></code> | <code>object</code> | Users can only push commits to this repository if the commit author name is consistent with their GitLab account name. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageNegativeRegex">CommitMessageNegativeRegex</a></code> | <code>string</code> | No commit message is allowed to match this regex, for example `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageRegex">CommitMessageRegex</a></code> | <code>string</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.denyDeleteTag">DenyDeleteTag</a></code> | <code>object</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.fileNameRegex">FileNameRegex</a></code> | <code>string</code> | Filenames matching the regular expression provided in this attribute are not allowed, for example, `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | Maximum file size (MB) allowed. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.memberCheck">MemberCheck</a></code> | <code>object</code> | Allows only GitLab users to author commits. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.preventSecrets">PreventSecrets</a></code> | <code>object</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.rejectNonDcoCommits">RejectNonDcoCommits</a></code> | <code>object</code> | Reject commit when it’s not DCO certified. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.rejectUnsignedCommits">RejectUnsignedCommits</a></code> | <code>object</code> | Only commits signed through GPG are allowed. |

---

##### `AuthorEmailRegex`<sup>Optional</sup> <a name="AuthorEmailRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.authorEmailRegex"></a>

```csharp
public string AuthorEmailRegex { get; set; }
```

- *Type:* string

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#author_email_regex Group#author_email_regex}

---

##### `BranchNameRegex`<sup>Optional</sup> <a name="BranchNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.branchNameRegex"></a>

```csharp
public string BranchNameRegex { get; set; }
```

- *Type:* string

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#branch_name_regex Group#branch_name_regex}

---

##### `CommitCommitterCheck`<sup>Optional</sup> <a name="CommitCommitterCheck" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterCheck"></a>

```csharp
public object CommitCommitterCheck { get; set; }
```

- *Type:* object

Only commits pushed using verified emails are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#commit_committer_check Group#commit_committer_check}

---

##### `CommitCommitterNameCheck`<sup>Optional</sup> <a name="CommitCommitterNameCheck" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterNameCheck"></a>

```csharp
public object CommitCommitterNameCheck { get; set; }
```

- *Type:* object

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#commit_committer_name_check Group#commit_committer_name_check}

---

##### `CommitMessageNegativeRegex`<sup>Optional</sup> <a name="CommitMessageNegativeRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageNegativeRegex"></a>

```csharp
public string CommitMessageNegativeRegex { get; set; }
```

- *Type:* string

No commit message is allowed to match this regex, for example `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#commit_message_negative_regex Group#commit_message_negative_regex}

---

##### `CommitMessageRegex`<sup>Optional</sup> <a name="CommitMessageRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageRegex"></a>

```csharp
public string CommitMessageRegex { get; set; }
```

- *Type:* string

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#commit_message_regex Group#commit_message_regex}

---

##### `DenyDeleteTag`<sup>Optional</sup> <a name="DenyDeleteTag" id="@cdktf/provider-gitlab.group.GroupPushRules.property.denyDeleteTag"></a>

```csharp
public object DenyDeleteTag { get; set; }
```

- *Type:* object

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#deny_delete_tag Group#deny_delete_tag}

---

##### `FileNameRegex`<sup>Optional</sup> <a name="FileNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.fileNameRegex"></a>

```csharp
public string FileNameRegex { get; set; }
```

- *Type:* string

Filenames matching the regular expression provided in this attribute are not allowed, for example, `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#file_name_regex Group#file_name_regex}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktf/provider-gitlab.group.GroupPushRules.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; set; }
```

- *Type:* double

Maximum file size (MB) allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#max_file_size Group#max_file_size}

---

##### `MemberCheck`<sup>Optional</sup> <a name="MemberCheck" id="@cdktf/provider-gitlab.group.GroupPushRules.property.memberCheck"></a>

```csharp
public object MemberCheck { get; set; }
```

- *Type:* object

Allows only GitLab users to author commits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#member_check Group#member_check}

---

##### `PreventSecrets`<sup>Optional</sup> <a name="PreventSecrets" id="@cdktf/provider-gitlab.group.GroupPushRules.property.preventSecrets"></a>

```csharp
public object PreventSecrets { get; set; }
```

- *Type:* object

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#prevent_secrets Group#prevent_secrets}

---

##### `RejectNonDcoCommits`<sup>Optional</sup> <a name="RejectNonDcoCommits" id="@cdktf/provider-gitlab.group.GroupPushRules.property.rejectNonDcoCommits"></a>

```csharp
public object RejectNonDcoCommits { get; set; }
```

- *Type:* object

Reject commit when it’s not DCO certified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#reject_non_dco_commits Group#reject_non_dco_commits}

---

##### `RejectUnsignedCommits`<sup>Optional</sup> <a name="RejectUnsignedCommits" id="@cdktf/provider-gitlab.group.GroupPushRules.property.rejectUnsignedCommits"></a>

```csharp
public object RejectUnsignedCommits { get; set; }
```

- *Type:* object

Only commits signed through GPG are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group#reject_unsigned_commits Group#reject_unsigned_commits}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupDefaultBranchProtectionDefaultsOutputReference <a name="GroupDefaultBranchProtectionDefaultsOutputReference" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GroupDefaultBranchProtectionDefaultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToMerge">ResetAllowedToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToPush">ResetAllowedToPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowForcePush">ResetAllowForcePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetDeveloperCanInitialPush">ResetDeveloperCanInitialPush</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedToMerge` <a name="ResetAllowedToMerge" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToMerge"></a>

```csharp
private void ResetAllowedToMerge()
```

##### `ResetAllowedToPush` <a name="ResetAllowedToPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToPush"></a>

```csharp
private void ResetAllowedToPush()
```

##### `ResetAllowForcePush` <a name="ResetAllowForcePush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowForcePush"></a>

```csharp
private void ResetAllowForcePush()
```

##### `ResetDeveloperCanInitialPush` <a name="ResetDeveloperCanInitialPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetDeveloperCanInitialPush"></a>

```csharp
private void ResetDeveloperCanInitialPush()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMergeInput">AllowedToMergeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPushInput">AllowedToPushInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePushInput">AllowForcePushInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPushInput">DeveloperCanInitialPushInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMerge">AllowedToMerge</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPush">AllowedToPush</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePush">AllowForcePush</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPush">DeveloperCanInitialPush</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedToMergeInput`<sup>Optional</sup> <a name="AllowedToMergeInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMergeInput"></a>

```csharp
public string[] AllowedToMergeInput { get; }
```

- *Type:* string[]

---

##### `AllowedToPushInput`<sup>Optional</sup> <a name="AllowedToPushInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPushInput"></a>

```csharp
public string[] AllowedToPushInput { get; }
```

- *Type:* string[]

---

##### `AllowForcePushInput`<sup>Optional</sup> <a name="AllowForcePushInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePushInput"></a>

```csharp
public object AllowForcePushInput { get; }
```

- *Type:* object

---

##### `DeveloperCanInitialPushInput`<sup>Optional</sup> <a name="DeveloperCanInitialPushInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPushInput"></a>

```csharp
public object DeveloperCanInitialPushInput { get; }
```

- *Type:* object

---

##### `AllowedToMerge`<sup>Required</sup> <a name="AllowedToMerge" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMerge"></a>

```csharp
public string[] AllowedToMerge { get; }
```

- *Type:* string[]

---

##### `AllowedToPush`<sup>Required</sup> <a name="AllowedToPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPush"></a>

```csharp
public string[] AllowedToPush { get; }
```

- *Type:* string[]

---

##### `AllowForcePush`<sup>Required</sup> <a name="AllowForcePush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePush"></a>

```csharp
public object AllowForcePush { get; }
```

- *Type:* object

---

##### `DeveloperCanInitialPush`<sup>Required</sup> <a name="DeveloperCanInitialPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPush"></a>

```csharp
public object DeveloperCanInitialPush { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.internalValue"></a>

```csharp
public GroupDefaultBranchProtectionDefaults InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

---


### GroupPushRulesOutputReference <a name="GroupPushRulesOutputReference" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GroupPushRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetAuthorEmailRegex">ResetAuthorEmailRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetBranchNameRegex">ResetBranchNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterCheck">ResetCommitCommitterCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterNameCheck">ResetCommitCommitterNameCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageNegativeRegex">ResetCommitMessageNegativeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageRegex">ResetCommitMessageRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetDenyDeleteTag">ResetDenyDeleteTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetFileNameRegex">ResetFileNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMemberCheck">ResetMemberCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetPreventSecrets">ResetPreventSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectNonDcoCommits">ResetRejectNonDcoCommits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectUnsignedCommits">ResetRejectUnsignedCommits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorEmailRegex` <a name="ResetAuthorEmailRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetAuthorEmailRegex"></a>

```csharp
private void ResetAuthorEmailRegex()
```

##### `ResetBranchNameRegex` <a name="ResetBranchNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetBranchNameRegex"></a>

```csharp
private void ResetBranchNameRegex()
```

##### `ResetCommitCommitterCheck` <a name="ResetCommitCommitterCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterCheck"></a>

```csharp
private void ResetCommitCommitterCheck()
```

##### `ResetCommitCommitterNameCheck` <a name="ResetCommitCommitterNameCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterNameCheck"></a>

```csharp
private void ResetCommitCommitterNameCheck()
```

##### `ResetCommitMessageNegativeRegex` <a name="ResetCommitMessageNegativeRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageNegativeRegex"></a>

```csharp
private void ResetCommitMessageNegativeRegex()
```

##### `ResetCommitMessageRegex` <a name="ResetCommitMessageRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageRegex"></a>

```csharp
private void ResetCommitMessageRegex()
```

##### `ResetDenyDeleteTag` <a name="ResetDenyDeleteTag" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetDenyDeleteTag"></a>

```csharp
private void ResetDenyDeleteTag()
```

##### `ResetFileNameRegex` <a name="ResetFileNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetFileNameRegex"></a>

```csharp
private void ResetFileNameRegex()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMaxFileSize"></a>

```csharp
private void ResetMaxFileSize()
```

##### `ResetMemberCheck` <a name="ResetMemberCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMemberCheck"></a>

```csharp
private void ResetMemberCheck()
```

##### `ResetPreventSecrets` <a name="ResetPreventSecrets" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetPreventSecrets"></a>

```csharp
private void ResetPreventSecrets()
```

##### `ResetRejectNonDcoCommits` <a name="ResetRejectNonDcoCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectNonDcoCommits"></a>

```csharp
private void ResetRejectNonDcoCommits()
```

##### `ResetRejectUnsignedCommits` <a name="ResetRejectUnsignedCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectUnsignedCommits"></a>

```csharp
private void ResetRejectUnsignedCommits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegexInput">AuthorEmailRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegexInput">BranchNameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheckInput">CommitCommitterCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheckInput">CommitCommitterNameCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegexInput">CommitMessageNegativeRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegexInput">CommitMessageRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTagInput">DenyDeleteTagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegexInput">FileNameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheckInput">MemberCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecretsInput">PreventSecretsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommitsInput">RejectNonDcoCommitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommitsInput">RejectUnsignedCommitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegex">AuthorEmailRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegex">BranchNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheck">CommitCommitterCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheck">CommitCommitterNameCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegex">CommitMessageNegativeRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegex">CommitMessageRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTag">DenyDeleteTag</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegex">FileNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheck">MemberCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecrets">PreventSecrets</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommits">RejectNonDcoCommits</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommits">RejectUnsignedCommits</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorEmailRegexInput`<sup>Optional</sup> <a name="AuthorEmailRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegexInput"></a>

```csharp
public string AuthorEmailRegexInput { get; }
```

- *Type:* string

---

##### `BranchNameRegexInput`<sup>Optional</sup> <a name="BranchNameRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegexInput"></a>

```csharp
public string BranchNameRegexInput { get; }
```

- *Type:* string

---

##### `CommitCommitterCheckInput`<sup>Optional</sup> <a name="CommitCommitterCheckInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheckInput"></a>

```csharp
public object CommitCommitterCheckInput { get; }
```

- *Type:* object

---

##### `CommitCommitterNameCheckInput`<sup>Optional</sup> <a name="CommitCommitterNameCheckInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheckInput"></a>

```csharp
public object CommitCommitterNameCheckInput { get; }
```

- *Type:* object

---

##### `CommitMessageNegativeRegexInput`<sup>Optional</sup> <a name="CommitMessageNegativeRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegexInput"></a>

```csharp
public string CommitMessageNegativeRegexInput { get; }
```

- *Type:* string

---

##### `CommitMessageRegexInput`<sup>Optional</sup> <a name="CommitMessageRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegexInput"></a>

```csharp
public string CommitMessageRegexInput { get; }
```

- *Type:* string

---

##### `DenyDeleteTagInput`<sup>Optional</sup> <a name="DenyDeleteTagInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTagInput"></a>

```csharp
public object DenyDeleteTagInput { get; }
```

- *Type:* object

---

##### `FileNameRegexInput`<sup>Optional</sup> <a name="FileNameRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegexInput"></a>

```csharp
public string FileNameRegexInput { get; }
```

- *Type:* string

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSizeInput"></a>

```csharp
public double MaxFileSizeInput { get; }
```

- *Type:* double

---

##### `MemberCheckInput`<sup>Optional</sup> <a name="MemberCheckInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheckInput"></a>

```csharp
public object MemberCheckInput { get; }
```

- *Type:* object

---

##### `PreventSecretsInput`<sup>Optional</sup> <a name="PreventSecretsInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecretsInput"></a>

```csharp
public object PreventSecretsInput { get; }
```

- *Type:* object

---

##### `RejectNonDcoCommitsInput`<sup>Optional</sup> <a name="RejectNonDcoCommitsInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommitsInput"></a>

```csharp
public object RejectNonDcoCommitsInput { get; }
```

- *Type:* object

---

##### `RejectUnsignedCommitsInput`<sup>Optional</sup> <a name="RejectUnsignedCommitsInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommitsInput"></a>

```csharp
public object RejectUnsignedCommitsInput { get; }
```

- *Type:* object

---

##### `AuthorEmailRegex`<sup>Required</sup> <a name="AuthorEmailRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegex"></a>

```csharp
public string AuthorEmailRegex { get; }
```

- *Type:* string

---

##### `BranchNameRegex`<sup>Required</sup> <a name="BranchNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegex"></a>

```csharp
public string BranchNameRegex { get; }
```

- *Type:* string

---

##### `CommitCommitterCheck`<sup>Required</sup> <a name="CommitCommitterCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheck"></a>

```csharp
public object CommitCommitterCheck { get; }
```

- *Type:* object

---

##### `CommitCommitterNameCheck`<sup>Required</sup> <a name="CommitCommitterNameCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheck"></a>

```csharp
public object CommitCommitterNameCheck { get; }
```

- *Type:* object

---

##### `CommitMessageNegativeRegex`<sup>Required</sup> <a name="CommitMessageNegativeRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegex"></a>

```csharp
public string CommitMessageNegativeRegex { get; }
```

- *Type:* string

---

##### `CommitMessageRegex`<sup>Required</sup> <a name="CommitMessageRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegex"></a>

```csharp
public string CommitMessageRegex { get; }
```

- *Type:* string

---

##### `DenyDeleteTag`<sup>Required</sup> <a name="DenyDeleteTag" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTag"></a>

```csharp
public object DenyDeleteTag { get; }
```

- *Type:* object

---

##### `FileNameRegex`<sup>Required</sup> <a name="FileNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegex"></a>

```csharp
public string FileNameRegex { get; }
```

- *Type:* string

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `MemberCheck`<sup>Required</sup> <a name="MemberCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheck"></a>

```csharp
public object MemberCheck { get; }
```

- *Type:* object

---

##### `PreventSecrets`<sup>Required</sup> <a name="PreventSecrets" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecrets"></a>

```csharp
public object PreventSecrets { get; }
```

- *Type:* object

---

##### `RejectNonDcoCommits`<sup>Required</sup> <a name="RejectNonDcoCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommits"></a>

```csharp
public object RejectNonDcoCommits { get; }
```

- *Type:* object

---

##### `RejectUnsignedCommits`<sup>Required</sup> <a name="RejectUnsignedCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommits"></a>

```csharp
public object RejectUnsignedCommits { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.internalValue"></a>

```csharp
public GroupPushRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

---



