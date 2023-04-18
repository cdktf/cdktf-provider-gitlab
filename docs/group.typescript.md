# `gitlab_group`

Refer to the Terraform Registory for docs: [`gitlab_group`](https://www.terraform.io/docs/providers/gitlab/r/group).

# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-gitlab.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-gitlab.group.Group"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/group gitlab_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.Group.Initializer"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

new group.Group(scope: Construct, id: string, config: GroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupConfig">GroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupConfig">GroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled">resetAutoDevopsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatar">resetAvatar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatarHash">resetAvatarHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection">resetDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetEmailsDisabled">resetEmailsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit">resetExtraSharedRunnersMinutesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges">resetIpRestrictionRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetLfsEnabled">resetLfsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMembershipLock">resetMembershipLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMentionsDisabled">resetMentionsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup">resetPreventForkingOutsideGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel">resetProjectCreationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled">resetRequestAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication">resetRequireTwoFactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit">resetSharedRunnersMinutesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock">resetShareWithGroupLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel">resetSubgroupCreationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod">resetTwoFactorGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetVisibilityLevel">resetVisibilityLevel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.group.Group.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.group.Group.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.Group.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.group.Group.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.group.Group.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.group.Group.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.group.Group.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.group.Group.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.group.Group.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.group.Group.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.group.Group.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.group.Group.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAutoDevopsEnabled` <a name="resetAutoDevopsEnabled" id="@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled"></a>

```typescript
public resetAutoDevopsEnabled(): void
```

##### `resetAvatar` <a name="resetAvatar" id="@cdktf/provider-gitlab.group.Group.resetAvatar"></a>

```typescript
public resetAvatar(): void
```

##### `resetAvatarHash` <a name="resetAvatarHash" id="@cdktf/provider-gitlab.group.Group.resetAvatarHash"></a>

```typescript
public resetAvatarHash(): void
```

##### `resetDefaultBranchProtection` <a name="resetDefaultBranchProtection" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection"></a>

```typescript
public resetDefaultBranchProtection(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.group.Group.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEmailsDisabled` <a name="resetEmailsDisabled" id="@cdktf/provider-gitlab.group.Group.resetEmailsDisabled"></a>

```typescript
public resetEmailsDisabled(): void
```

##### `resetExtraSharedRunnersMinutesLimit` <a name="resetExtraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit"></a>

```typescript
public resetExtraSharedRunnersMinutesLimit(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.group.Group.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpRestrictionRanges` <a name="resetIpRestrictionRanges" id="@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges"></a>

```typescript
public resetIpRestrictionRanges(): void
```

##### `resetLfsEnabled` <a name="resetLfsEnabled" id="@cdktf/provider-gitlab.group.Group.resetLfsEnabled"></a>

```typescript
public resetLfsEnabled(): void
```

##### `resetMembershipLock` <a name="resetMembershipLock" id="@cdktf/provider-gitlab.group.Group.resetMembershipLock"></a>

```typescript
public resetMembershipLock(): void
```

##### `resetMentionsDisabled` <a name="resetMentionsDisabled" id="@cdktf/provider-gitlab.group.Group.resetMentionsDisabled"></a>

```typescript
public resetMentionsDisabled(): void
```

##### `resetParentId` <a name="resetParentId" id="@cdktf/provider-gitlab.group.Group.resetParentId"></a>

```typescript
public resetParentId(): void
```

##### `resetPreventForkingOutsideGroup` <a name="resetPreventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup"></a>

```typescript
public resetPreventForkingOutsideGroup(): void
```

##### `resetProjectCreationLevel` <a name="resetProjectCreationLevel" id="@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel"></a>

```typescript
public resetProjectCreationLevel(): void
```

##### `resetRequestAccessEnabled` <a name="resetRequestAccessEnabled" id="@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled"></a>

```typescript
public resetRequestAccessEnabled(): void
```

##### `resetRequireTwoFactorAuthentication` <a name="resetRequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication"></a>

```typescript
public resetRequireTwoFactorAuthentication(): void
```

##### `resetSharedRunnersMinutesLimit` <a name="resetSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit"></a>

```typescript
public resetSharedRunnersMinutesLimit(): void
```

##### `resetShareWithGroupLock` <a name="resetShareWithGroupLock" id="@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock"></a>

```typescript
public resetShareWithGroupLock(): void
```

##### `resetSubgroupCreationLevel` <a name="resetSubgroupCreationLevel" id="@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel"></a>

```typescript
public resetSubgroupCreationLevel(): void
```

##### `resetTwoFactorGracePeriod` <a name="resetTwoFactorGracePeriod" id="@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod"></a>

```typescript
public resetTwoFactorGracePeriod(): void
```

##### `resetVisibilityLevel` <a name="resetVisibilityLevel" id="@cdktf/provider-gitlab.group.Group.resetVisibilityLevel"></a>

```typescript
public resetVisibilityLevel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.group.Group.isConstruct"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

group.Group.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.group.Group.isTerraformElement"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

group.Group.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.group.Group.isTerraformResource"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

group.Group.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullPath">fullPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.runnersToken">runnersToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput">autoDevopsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHashInput">avatarHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarInput">avatarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput">defaultBranchProtectionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsDisabledInput">emailsDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput">extraSharedRunnersMinutesLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput">ipRestrictionRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput">lfsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLockInput">membershipLockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput">mentionsDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentIdInput">parentIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput">preventForkingOutsideGroupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput">projectCreationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput">requestAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput">requireTwoFactorAuthenticationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput">sharedRunnersMinutesLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput">shareWithGroupLockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput">subgroupCreationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput">twoFactorGracePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput">visibilityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatar">avatar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHash">avatarHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection">defaultBranchProtection</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsDisabled">emailsDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit">extraSharedRunnersMinutesLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges">ipRestrictionRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabled">lfsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLock">membershipLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabled">mentionsDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentId">parentId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup">preventForkingOutsideGroup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevel">projectCreationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled">requestAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication">requireTwoFactorAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit">sharedRunnersMinutesLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock">shareWithGroupLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel">subgroupCreationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod">twoFactorGracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevel">visibilityLevel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.group.Group.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.group.Group.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.group.Group.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.group.Group.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.group.Group.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.group.Group.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.group.Group.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.group.Group.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.group.Group.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.group.Group.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.group.Group.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.group.Group.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.group.Group.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.group.Group.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-gitlab.group.Group.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `fullPath`<sup>Required</sup> <a name="fullPath" id="@cdktf/provider-gitlab.group.Group.property.fullPath"></a>

```typescript
public readonly fullPath: string;
```

- *Type:* string

---

##### `runnersToken`<sup>Required</sup> <a name="runnersToken" id="@cdktf/provider-gitlab.group.Group.property.runnersToken"></a>

```typescript
public readonly runnersToken: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.group.Group.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `autoDevopsEnabledInput`<sup>Optional</sup> <a name="autoDevopsEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput"></a>

```typescript
public readonly autoDevopsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `avatarHashInput`<sup>Optional</sup> <a name="avatarHashInput" id="@cdktf/provider-gitlab.group.Group.property.avatarHashInput"></a>

```typescript
public readonly avatarHashInput: string;
```

- *Type:* string

---

##### `avatarInput`<sup>Optional</sup> <a name="avatarInput" id="@cdktf/provider-gitlab.group.Group.property.avatarInput"></a>

```typescript
public readonly avatarInput: string;
```

- *Type:* string

---

##### `defaultBranchProtectionInput`<sup>Optional</sup> <a name="defaultBranchProtectionInput" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput"></a>

```typescript
public readonly defaultBranchProtectionInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.group.Group.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `emailsDisabledInput`<sup>Optional</sup> <a name="emailsDisabledInput" id="@cdktf/provider-gitlab.group.Group.property.emailsDisabledInput"></a>

```typescript
public readonly emailsDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extraSharedRunnersMinutesLimitInput`<sup>Optional</sup> <a name="extraSharedRunnersMinutesLimitInput" id="@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput"></a>

```typescript
public readonly extraSharedRunnersMinutesLimitInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.group.Group.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipRestrictionRangesInput`<sup>Optional</sup> <a name="ipRestrictionRangesInput" id="@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput"></a>

```typescript
public readonly ipRestrictionRangesInput: string[];
```

- *Type:* string[]

---

##### `lfsEnabledInput`<sup>Optional</sup> <a name="lfsEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput"></a>

```typescript
public readonly lfsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `membershipLockInput`<sup>Optional</sup> <a name="membershipLockInput" id="@cdktf/provider-gitlab.group.Group.property.membershipLockInput"></a>

```typescript
public readonly membershipLockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mentionsDisabledInput`<sup>Optional</sup> <a name="mentionsDisabledInput" id="@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput"></a>

```typescript
public readonly mentionsDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.group.Group.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktf/provider-gitlab.group.Group.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-gitlab.group.Group.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `preventForkingOutsideGroupInput`<sup>Optional</sup> <a name="preventForkingOutsideGroupInput" id="@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput"></a>

```typescript
public readonly preventForkingOutsideGroupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectCreationLevelInput`<sup>Optional</sup> <a name="projectCreationLevelInput" id="@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput"></a>

```typescript
public readonly projectCreationLevelInput: string;
```

- *Type:* string

---

##### `requestAccessEnabledInput`<sup>Optional</sup> <a name="requestAccessEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput"></a>

```typescript
public readonly requestAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireTwoFactorAuthenticationInput`<sup>Optional</sup> <a name="requireTwoFactorAuthenticationInput" id="@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput"></a>

```typescript
public readonly requireTwoFactorAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedRunnersMinutesLimitInput`<sup>Optional</sup> <a name="sharedRunnersMinutesLimitInput" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput"></a>

```typescript
public readonly sharedRunnersMinutesLimitInput: number;
```

- *Type:* number

---

##### `shareWithGroupLockInput`<sup>Optional</sup> <a name="shareWithGroupLockInput" id="@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput"></a>

```typescript
public readonly shareWithGroupLockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subgroupCreationLevelInput`<sup>Optional</sup> <a name="subgroupCreationLevelInput" id="@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput"></a>

```typescript
public readonly subgroupCreationLevelInput: string;
```

- *Type:* string

---

##### `twoFactorGracePeriodInput`<sup>Optional</sup> <a name="twoFactorGracePeriodInput" id="@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput"></a>

```typescript
public readonly twoFactorGracePeriodInput: number;
```

- *Type:* number

---

##### `visibilityLevelInput`<sup>Optional</sup> <a name="visibilityLevelInput" id="@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput"></a>

```typescript
public readonly visibilityLevelInput: string;
```

- *Type:* string

---

##### `autoDevopsEnabled`<sup>Required</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled"></a>

```typescript
public readonly autoDevopsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `avatar`<sup>Required</sup> <a name="avatar" id="@cdktf/provider-gitlab.group.Group.property.avatar"></a>

```typescript
public readonly avatar: string;
```

- *Type:* string

---

##### `avatarHash`<sup>Required</sup> <a name="avatarHash" id="@cdktf/provider-gitlab.group.Group.property.avatarHash"></a>

```typescript
public readonly avatarHash: string;
```

- *Type:* string

---

##### `defaultBranchProtection`<sup>Required</sup> <a name="defaultBranchProtection" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection"></a>

```typescript
public readonly defaultBranchProtection: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.group.Group.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `emailsDisabled`<sup>Required</sup> <a name="emailsDisabled" id="@cdktf/provider-gitlab.group.Group.property.emailsDisabled"></a>

```typescript
public readonly emailsDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extraSharedRunnersMinutesLimit`<sup>Required</sup> <a name="extraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit"></a>

```typescript
public readonly extraSharedRunnersMinutesLimit: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipRestrictionRanges`<sup>Required</sup> <a name="ipRestrictionRanges" id="@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges"></a>

```typescript
public readonly ipRestrictionRanges: string[];
```

- *Type:* string[]

---

##### `lfsEnabled`<sup>Required</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.group.Group.property.lfsEnabled"></a>

```typescript
public readonly lfsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `membershipLock`<sup>Required</sup> <a name="membershipLock" id="@cdktf/provider-gitlab.group.Group.property.membershipLock"></a>

```typescript
public readonly membershipLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mentionsDisabled`<sup>Required</sup> <a name="mentionsDisabled" id="@cdktf/provider-gitlab.group.Group.property.mentionsDisabled"></a>

```typescript
public readonly mentionsDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.group.Group.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/provider-gitlab.group.Group.property.parentId"></a>

```typescript
public readonly parentId: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.Group.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `preventForkingOutsideGroup`<sup>Required</sup> <a name="preventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup"></a>

```typescript
public readonly preventForkingOutsideGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectCreationLevel`<sup>Required</sup> <a name="projectCreationLevel" id="@cdktf/provider-gitlab.group.Group.property.projectCreationLevel"></a>

```typescript
public readonly projectCreationLevel: string;
```

- *Type:* string

---

##### `requestAccessEnabled`<sup>Required</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled"></a>

```typescript
public readonly requestAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireTwoFactorAuthentication`<sup>Required</sup> <a name="requireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication"></a>

```typescript
public readonly requireTwoFactorAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedRunnersMinutesLimit`<sup>Required</sup> <a name="sharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit"></a>

```typescript
public readonly sharedRunnersMinutesLimit: number;
```

- *Type:* number

---

##### `shareWithGroupLock`<sup>Required</sup> <a name="shareWithGroupLock" id="@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock"></a>

```typescript
public readonly shareWithGroupLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subgroupCreationLevel`<sup>Required</sup> <a name="subgroupCreationLevel" id="@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel"></a>

```typescript
public readonly subgroupCreationLevel: string;
```

- *Type:* string

---

##### `twoFactorGracePeriod`<sup>Required</sup> <a name="twoFactorGracePeriod" id="@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod"></a>

```typescript
public readonly twoFactorGracePeriod: number;
```

- *Type:* number

---

##### `visibilityLevel`<sup>Required</sup> <a name="visibilityLevel" id="@cdktf/provider-gitlab.group.Group.property.visibilityLevel"></a>

```typescript
public readonly visibilityLevel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.group.Group.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupConfig <a name="GroupConfig" id="@cdktf/provider-gitlab.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupConfig.Initializer"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

const groupConfig: group.GroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.name">name</a></code> | <code>string</code> | The name of this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.path">path</a></code> | <code>string</code> | The path of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to false. Default to Auto DevOps pipeline for all projects within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatar">avatar</a></code> | <code>string</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash">avatarHash</a></code> | <code>string</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection">defaultBranchProtection</a></code> | <code>number</code> | Defaults to 2. See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.description">description</a></code> | <code>string</code> | The description of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.emailsDisabled">emailsDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to false. Disable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit">extraSharedRunnersMinutesLimit</a></code> | <code>number</code> | Can be set by administrators only. Additional CI/CD minutes for this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#id Group#id}. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges">ipRestrictionRanges</a></code> | <code>string[]</code> | A list of IP addresses or subnet masks to restrict group access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled">lfsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to true. Enable/disable Large File Storage (LFS) for the projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock">membershipLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | Users cannot be added to projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled">mentionsDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to false. Disable the capability of a group from getting mentioned. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.parentId">parentId</a></code> | <code>number</code> | Id of the parent group (creates a nested group). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup">preventForkingOutsideGroup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to false. When enabled, users can not fork projects from this group to external namespaces. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel">projectCreationLevel</a></code> | <code>string</code> | Defaults to maintainer. Determine if developers can create projects in the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled">requestAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to false. Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication">requireTwoFactorAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to false. Require all users in this group to setup Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit">sharedRunnersMinutesLimit</a></code> | <code>number</code> | Can be set by administrators only. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock">shareWithGroupLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to false. Prevent sharing a project with another group within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel">subgroupCreationLevel</a></code> | <code>string</code> | Defaults to owner. Allowed to create subgroups. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod">twoFactorGracePeriod</a></code> | <code>number</code> | Defaults to 48. Time before Two-factor authentication is enforced (in hours). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel">visibilityLevel</a></code> | <code>string</code> | The group's visibility. Can be `private`, `internal`, or `public`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.group.GroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.group.GroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.group.GroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.GroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.group.GroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.group.GroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#name Group#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.GroupConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#path Group#path}

---

##### `autoDevopsEnabled`<sup>Optional</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled"></a>

```typescript
public readonly autoDevopsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to false. Default to Auto DevOps pipeline for all projects within this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#auto_devops_enabled Group#auto_devops_enabled}

---

##### `avatar`<sup>Optional</sup> <a name="avatar" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatar"></a>

```typescript
public readonly avatar: string;
```

- *Type:* string

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#avatar Group#avatar}

---

##### `avatarHash`<sup>Optional</sup> <a name="avatarHash" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash"></a>

```typescript
public readonly avatarHash: string;
```

- *Type:* string

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#avatar_hash Group#avatar_hash}

---

##### `defaultBranchProtection`<sup>Optional</sup> <a name="defaultBranchProtection" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection"></a>

```typescript
public readonly defaultBranchProtection: number;
```

- *Type:* number

Defaults to 2. See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#default_branch_protection Group#default_branch_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.group.GroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#description Group#description}

---

##### `emailsDisabled`<sup>Optional</sup> <a name="emailsDisabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.emailsDisabled"></a>

```typescript
public readonly emailsDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to false. Disable email notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#emails_disabled Group#emails_disabled}

---

##### `extraSharedRunnersMinutesLimit`<sup>Optional</sup> <a name="extraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit"></a>

```typescript
public readonly extraSharedRunnersMinutesLimit: number;
```

- *Type:* number

Can be set by administrators only. Additional CI/CD minutes for this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#extra_shared_runners_minutes_limit Group#extra_shared_runners_minutes_limit}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.group.GroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipRestrictionRanges`<sup>Optional</sup> <a name="ipRestrictionRanges" id="@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges"></a>

```typescript
public readonly ipRestrictionRanges: string[];
```

- *Type:* string[]

A list of IP addresses or subnet masks to restrict group access.

Will be concatenated together into a comma separated string. Only allowed on top level groups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#ip_restriction_ranges Group#ip_restriction_ranges}

---

##### `lfsEnabled`<sup>Optional</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled"></a>

```typescript
public readonly lfsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to true. Enable/disable Large File Storage (LFS) for the projects in this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#lfs_enabled Group#lfs_enabled}

---

##### `membershipLock`<sup>Optional</sup> <a name="membershipLock" id="@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock"></a>

```typescript
public readonly membershipLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Users cannot be added to projects in this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#membership_lock Group#membership_lock}

---

##### `mentionsDisabled`<sup>Optional</sup> <a name="mentionsDisabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled"></a>

```typescript
public readonly mentionsDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to false. Disable the capability of a group from getting mentioned.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#mentions_disabled Group#mentions_disabled}

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktf/provider-gitlab.group.GroupConfig.property.parentId"></a>

```typescript
public readonly parentId: number;
```

- *Type:* number

Id of the parent group (creates a nested group).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#parent_id Group#parent_id}

---

##### `preventForkingOutsideGroup`<sup>Optional</sup> <a name="preventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup"></a>

```typescript
public readonly preventForkingOutsideGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to false. When enabled, users can not fork projects from this group to external namespaces.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#prevent_forking_outside_group Group#prevent_forking_outside_group}

---

##### `projectCreationLevel`<sup>Optional</sup> <a name="projectCreationLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel"></a>

```typescript
public readonly projectCreationLevel: string;
```

- *Type:* string

Defaults to maintainer. Determine if developers can create projects in the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#project_creation_level Group#project_creation_level}

---

##### `requestAccessEnabled`<sup>Optional</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled"></a>

```typescript
public readonly requestAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to false. Allow users to request member access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#request_access_enabled Group#request_access_enabled}

---

##### `requireTwoFactorAuthentication`<sup>Optional</sup> <a name="requireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication"></a>

```typescript
public readonly requireTwoFactorAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to false. Require all users in this group to setup Two-factor authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#require_two_factor_authentication Group#require_two_factor_authentication}

---

##### `sharedRunnersMinutesLimit`<sup>Optional</sup> <a name="sharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit"></a>

```typescript
public readonly sharedRunnersMinutesLimit: number;
```

- *Type:* number

Can be set by administrators only.

Maximum number of monthly CI/CD minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#shared_runners_minutes_limit Group#shared_runners_minutes_limit}

---

##### `shareWithGroupLock`<sup>Optional</sup> <a name="shareWithGroupLock" id="@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock"></a>

```typescript
public readonly shareWithGroupLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to false. Prevent sharing a project with another group within this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#share_with_group_lock Group#share_with_group_lock}

---

##### `subgroupCreationLevel`<sup>Optional</sup> <a name="subgroupCreationLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel"></a>

```typescript
public readonly subgroupCreationLevel: string;
```

- *Type:* string

Defaults to owner. Allowed to create subgroups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#subgroup_creation_level Group#subgroup_creation_level}

---

##### `twoFactorGracePeriod`<sup>Optional</sup> <a name="twoFactorGracePeriod" id="@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod"></a>

```typescript
public readonly twoFactorGracePeriod: number;
```

- *Type:* number

Defaults to 48. Time before Two-factor authentication is enforced (in hours).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#two_factor_grace_period Group#two_factor_grace_period}

---

##### `visibilityLevel`<sup>Optional</sup> <a name="visibilityLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel"></a>

```typescript
public readonly visibilityLevel: string;
```

- *Type:* string

The group's visibility. Can be `private`, `internal`, or `public`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#visibility_level Group#visibility_level}

---



