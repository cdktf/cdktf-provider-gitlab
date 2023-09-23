# `gitlab_group`

Refer to the Terraform Registory for docs: [`gitlab_group`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group).

# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-gitlab.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-gitlab.group.Group"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group gitlab_group}.

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
| <code><a href="#@cdktf/provider-gitlab.group.Group.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled">ResetAutoDevopsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatar">ResetAvatar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatarHash">ResetAvatarHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection">ResetDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetEmailsDisabled">ResetEmailsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit">ResetExtraSharedRunnersMinutesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges">ResetIpRestrictionRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetLfsEnabled">ResetLfsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMembershipLock">ResetMembershipLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMentionsDisabled">ResetMentionsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetParentId">ResetParentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup">ResetPreventForkingOutsideGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel">ResetProjectCreationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled">ResetRequestAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication">ResetRequireTwoFactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit">ResetSharedRunnersMinutesLimit</a></code> | *No description.* |
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

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.group.Group.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.group.Group.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

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

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

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

##### `ResetDefaultBranchProtection` <a name="ResetDefaultBranchProtection" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection"></a>

```csharp
private void ResetDefaultBranchProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.group.Group.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEmailsDisabled` <a name="ResetEmailsDisabled" id="@cdktf/provider-gitlab.group.Group.resetEmailsDisabled"></a>

```csharp
private void ResetEmailsDisabled()
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

##### `ResetPreventForkingOutsideGroup` <a name="ResetPreventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup"></a>

```csharp
private void ResetPreventForkingOutsideGroup()
```

##### `ResetProjectCreationLevel` <a name="ResetProjectCreationLevel" id="@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel"></a>

```csharp
private void ResetProjectCreationLevel()
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
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullPath">FullPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.runnersToken">RunnersToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput">AutoDevopsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHashInput">AvatarHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarInput">AvatarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput">DefaultBranchProtectionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsDisabledInput">EmailsDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput">ExtraSharedRunnersMinutesLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput">IpRestrictionRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput">LfsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLockInput">MembershipLockInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput">MentionsDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentIdInput">ParentIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput">PreventForkingOutsideGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput">ProjectCreationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput">RequestAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput">RequireTwoFactorAuthenticationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput">SharedRunnersMinutesLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput">ShareWithGroupLockInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput">SubgroupCreationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput">TwoFactorGracePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput">VisibilityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.wikiAccessLevelInput">WikiAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatar">Avatar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHash">AvatarHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection">DefaultBranchProtection</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsDisabled">EmailsDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit">ExtraSharedRunnersMinutesLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges">IpRestrictionRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabled">LfsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLock">MembershipLock</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabled">MentionsDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentId">ParentId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup">PreventForkingOutsideGroup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevel">ProjectCreationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication">RequireTwoFactorAuthentication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit">SharedRunnersMinutesLimit</a></code> | <code>double</code> | *No description.* |
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

##### `EmailsDisabledInput`<sup>Optional</sup> <a name="EmailsDisabledInput" id="@cdktf/provider-gitlab.group.Group.property.emailsDisabledInput"></a>

```csharp
public object EmailsDisabledInput { get; }
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

##### `EmailsDisabled`<sup>Required</sup> <a name="EmailsDisabled" id="@cdktf/provider-gitlab.group.Group.property.emailsDisabled"></a>

```csharp
public object EmailsDisabled { get; }
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
    object AutoDevopsEnabled = null,
    string Avatar = null,
    string AvatarHash = null,
    double DefaultBranchProtection = null,
    string Description = null,
    object EmailsDisabled = null,
    double ExtraSharedRunnersMinutesLimit = null,
    string Id = null,
    string[] IpRestrictionRanges = null,
    object LfsEnabled = null,
    object MembershipLock = null,
    object MentionsDisabled = null,
    double ParentId = null,
    object PreventForkingOutsideGroup = null,
    string ProjectCreationLevel = null,
    object RequestAccessEnabled = null,
    object RequireTwoFactorAuthentication = null,
    double SharedRunnersMinutesLimit = null,
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
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.name">Name</a></code> | <code>string</code> | The name of this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.path">Path</a></code> | <code>string</code> | The path of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>object</code> | Defaults to false. Default to Auto DevOps pipeline for all projects within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatar">Avatar</a></code> | <code>string</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash">AvatarHash</a></code> | <code>string</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection">DefaultBranchProtection</a></code> | <code>double</code> | Defaults to 2. See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.description">Description</a></code> | <code>string</code> | The description of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.emailsDisabled">EmailsDisabled</a></code> | <code>object</code> | Defaults to false. Disable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit">ExtraSharedRunnersMinutesLimit</a></code> | <code>double</code> | Can be set by administrators only. Additional CI/CD minutes for this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges">IpRestrictionRanges</a></code> | <code>string[]</code> | A list of IP addresses or subnet masks to restrict group access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled">LfsEnabled</a></code> | <code>object</code> | Defaults to true. Enable/disable Large File Storage (LFS) for the projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock">MembershipLock</a></code> | <code>object</code> | Users cannot be added to projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled">MentionsDisabled</a></code> | <code>object</code> | Defaults to false. Disable the capability of a group from getting mentioned. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.parentId">ParentId</a></code> | <code>double</code> | Id of the parent group (creates a nested group). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup">PreventForkingOutsideGroup</a></code> | <code>object</code> | Defaults to false. When enabled, users can not fork projects from this group to external namespaces. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel">ProjectCreationLevel</a></code> | <code>string</code> | Defaults to maintainer. Determine if developers can create projects in the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>object</code> | Defaults to false. Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication">RequireTwoFactorAuthentication</a></code> | <code>object</code> | Defaults to false. Require all users in this group to setup Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit">SharedRunnersMinutesLimit</a></code> | <code>double</code> | Can be set by administrators only. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock">ShareWithGroupLock</a></code> | <code>object</code> | Defaults to false. Prevent sharing a project with another group within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel">SubgroupCreationLevel</a></code> | <code>string</code> | Defaults to owner. Allowed to create subgroups. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod">TwoFactorGracePeriod</a></code> | <code>double</code> | Defaults to 48. Time before Two-factor authentication is enforced (in hours). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel">VisibilityLevel</a></code> | <code>string</code> | The group's visibility. Can be `private`, `internal`, or `public`. |
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

The name of this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#name Group#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.group.GroupConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#path Group#path}

---

##### `AutoDevopsEnabled`<sup>Optional</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled"></a>

```csharp
public object AutoDevopsEnabled { get; set; }
```

- *Type:* object

Defaults to false. Default to Auto DevOps pipeline for all projects within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#auto_devops_enabled Group#auto_devops_enabled}

---

##### `Avatar`<sup>Optional</sup> <a name="Avatar" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatar"></a>

```csharp
public string Avatar { get; set; }
```

- *Type:* string

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#avatar Group#avatar}

---

##### `AvatarHash`<sup>Optional</sup> <a name="AvatarHash" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash"></a>

```csharp
public string AvatarHash { get; set; }
```

- *Type:* string

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#avatar_hash Group#avatar_hash}

---

##### `DefaultBranchProtection`<sup>Optional</sup> <a name="DefaultBranchProtection" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection"></a>

```csharp
public double DefaultBranchProtection { get; set; }
```

- *Type:* double

Defaults to 2. See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#default_branch_protection Group#default_branch_protection}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.group.GroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#description Group#description}

---

##### `EmailsDisabled`<sup>Optional</sup> <a name="EmailsDisabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.emailsDisabled"></a>

```csharp
public object EmailsDisabled { get; set; }
```

- *Type:* object

Defaults to false. Disable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#emails_disabled Group#emails_disabled}

---

##### `ExtraSharedRunnersMinutesLimit`<sup>Optional</sup> <a name="ExtraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit"></a>

```csharp
public double ExtraSharedRunnersMinutesLimit { get; set; }
```

- *Type:* double

Can be set by administrators only. Additional CI/CD minutes for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#extra_shared_runners_minutes_limit Group#extra_shared_runners_minutes_limit}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.group.GroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#id Group#id}.

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#ip_restriction_ranges Group#ip_restriction_ranges}

---

##### `LfsEnabled`<sup>Optional</sup> <a name="LfsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled"></a>

```csharp
public object LfsEnabled { get; set; }
```

- *Type:* object

Defaults to true. Enable/disable Large File Storage (LFS) for the projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#lfs_enabled Group#lfs_enabled}

---

##### `MembershipLock`<sup>Optional</sup> <a name="MembershipLock" id="@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock"></a>

```csharp
public object MembershipLock { get; set; }
```

- *Type:* object

Users cannot be added to projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#membership_lock Group#membership_lock}

---

##### `MentionsDisabled`<sup>Optional</sup> <a name="MentionsDisabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled"></a>

```csharp
public object MentionsDisabled { get; set; }
```

- *Type:* object

Defaults to false. Disable the capability of a group from getting mentioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#mentions_disabled Group#mentions_disabled}

---

##### `ParentId`<sup>Optional</sup> <a name="ParentId" id="@cdktf/provider-gitlab.group.GroupConfig.property.parentId"></a>

```csharp
public double ParentId { get; set; }
```

- *Type:* double

Id of the parent group (creates a nested group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#parent_id Group#parent_id}

---

##### `PreventForkingOutsideGroup`<sup>Optional</sup> <a name="PreventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup"></a>

```csharp
public object PreventForkingOutsideGroup { get; set; }
```

- *Type:* object

Defaults to false. When enabled, users can not fork projects from this group to external namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#prevent_forking_outside_group Group#prevent_forking_outside_group}

---

##### `ProjectCreationLevel`<sup>Optional</sup> <a name="ProjectCreationLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel"></a>

```csharp
public string ProjectCreationLevel { get; set; }
```

- *Type:* string

Defaults to maintainer. Determine if developers can create projects in the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#project_creation_level Group#project_creation_level}

---

##### `RequestAccessEnabled`<sup>Optional</sup> <a name="RequestAccessEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled"></a>

```csharp
public object RequestAccessEnabled { get; set; }
```

- *Type:* object

Defaults to false. Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#request_access_enabled Group#request_access_enabled}

---

##### `RequireTwoFactorAuthentication`<sup>Optional</sup> <a name="RequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication"></a>

```csharp
public object RequireTwoFactorAuthentication { get; set; }
```

- *Type:* object

Defaults to false. Require all users in this group to setup Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#require_two_factor_authentication Group#require_two_factor_authentication}

---

##### `SharedRunnersMinutesLimit`<sup>Optional</sup> <a name="SharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit"></a>

```csharp
public double SharedRunnersMinutesLimit { get; set; }
```

- *Type:* double

Can be set by administrators only.

Maximum number of monthly CI/CD minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#shared_runners_minutes_limit Group#shared_runners_minutes_limit}

---

##### `ShareWithGroupLock`<sup>Optional</sup> <a name="ShareWithGroupLock" id="@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock"></a>

```csharp
public object ShareWithGroupLock { get; set; }
```

- *Type:* object

Defaults to false. Prevent sharing a project with another group within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#share_with_group_lock Group#share_with_group_lock}

---

##### `SubgroupCreationLevel`<sup>Optional</sup> <a name="SubgroupCreationLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel"></a>

```csharp
public string SubgroupCreationLevel { get; set; }
```

- *Type:* string

Defaults to owner. Allowed to create subgroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#subgroup_creation_level Group#subgroup_creation_level}

---

##### `TwoFactorGracePeriod`<sup>Optional</sup> <a name="TwoFactorGracePeriod" id="@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod"></a>

```csharp
public double TwoFactorGracePeriod { get; set; }
```

- *Type:* double

Defaults to 48. Time before Two-factor authentication is enforced (in hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#two_factor_grace_period Group#two_factor_grace_period}

---

##### `VisibilityLevel`<sup>Optional</sup> <a name="VisibilityLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel"></a>

```csharp
public string VisibilityLevel { get; set; }
```

- *Type:* string

The group's visibility. Can be `private`, `internal`, or `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#visibility_level Group#visibility_level}

---

##### `WikiAccessLevel`<sup>Optional</sup> <a name="WikiAccessLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.wikiAccessLevel"></a>

```csharp
public string WikiAccessLevel { get; set; }
```

- *Type:* string

The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#wiki_access_level Group#wiki_access_level}

---



