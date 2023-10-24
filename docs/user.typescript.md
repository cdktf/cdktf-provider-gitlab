# `gitlab_user`

Refer to the Terraform Registory for docs: [`gitlab_user`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-gitlab.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-gitlab.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user gitlab_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.user.User.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-gitlab'

new user.User(scope: Construct, id: string, config: UserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.user.UserConfig">UserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.user.User.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.user.User.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetCanCreateGroup">resetCanCreateGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetIsAdmin">resetIsAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetIsExternal">resetIsExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetNamespaceId">resetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetNote">resetNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetProjectsLimit">resetProjectsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetResetPassword">resetResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetSkipConfirmation">resetSkipConfirmation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetTfPassword">resetTfPassword</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.user.User.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.user.User.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.user.User.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.user.User.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.user.User.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.user.User.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.user.User.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.user.User.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.user.User.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.user.User.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.user.User.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.user.User.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.user.User.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.user.User.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.user.User.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.user.User.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.user.User.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.user.User.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.user.User.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.user.User.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.user.User.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.user.User.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.user.User.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetCanCreateGroup` <a name="resetCanCreateGroup" id="@cdktf/provider-gitlab.user.User.resetCanCreateGroup"></a>

```typescript
public resetCanCreateGroup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.user.User.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAdmin` <a name="resetIsAdmin" id="@cdktf/provider-gitlab.user.User.resetIsAdmin"></a>

```typescript
public resetIsAdmin(): void
```

##### `resetIsExternal` <a name="resetIsExternal" id="@cdktf/provider-gitlab.user.User.resetIsExternal"></a>

```typescript
public resetIsExternal(): void
```

##### `resetNamespaceId` <a name="resetNamespaceId" id="@cdktf/provider-gitlab.user.User.resetNamespaceId"></a>

```typescript
public resetNamespaceId(): void
```

##### `resetNote` <a name="resetNote" id="@cdktf/provider-gitlab.user.User.resetNote"></a>

```typescript
public resetNote(): void
```

##### `resetProjectsLimit` <a name="resetProjectsLimit" id="@cdktf/provider-gitlab.user.User.resetProjectsLimit"></a>

```typescript
public resetProjectsLimit(): void
```

##### `resetResetPassword` <a name="resetResetPassword" id="@cdktf/provider-gitlab.user.User.resetResetPassword"></a>

```typescript
public resetResetPassword(): void
```

##### `resetSkipConfirmation` <a name="resetSkipConfirmation" id="@cdktf/provider-gitlab.user.User.resetSkipConfirmation"></a>

```typescript
public resetSkipConfirmation(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-gitlab.user.User.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTfPassword` <a name="resetTfPassword" id="@cdktf/provider-gitlab.user.User.resetTfPassword"></a>

```typescript
public resetTfPassword(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.user.User.isConstruct"></a>

```typescript
import { user } from '@cdktf/provider-gitlab'

user.User.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.user.User.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.user.User.isTerraformElement"></a>

```typescript
import { user } from '@cdktf/provider-gitlab'

user.User.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.user.User.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.user.User.isTerraformResource"></a>

```typescript
import { user } from '@cdktf/provider-gitlab'

user.User.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.user.User.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.user.User.generateConfigForImport"></a>

```typescript
import { user } from '@cdktf/provider-gitlab'

user.User.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the User to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.canCreateGroupInput">canCreateGroupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isAdminInput">isAdminInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isExternalInput">isExternalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.namespaceIdInput">namespaceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.noteInput">noteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.projectsLimitInput">projectsLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.resetPasswordInput">resetPasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.skipConfirmationInput">skipConfirmationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.canCreateGroup">canCreateGroup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isAdmin">isAdmin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isExternal">isExternal</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.namespaceId">namespaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.note">note</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.projectsLimit">projectsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.resetPassword">resetPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.skipConfirmation">skipConfirmation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.user.User.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.user.User.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.user.User.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.user.User.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.user.User.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.user.User.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.user.User.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.user.User.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.user.User.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.user.User.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.user.User.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.user.User.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.user.User.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.user.User.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `canCreateGroupInput`<sup>Optional</sup> <a name="canCreateGroupInput" id="@cdktf/provider-gitlab.user.User.property.canCreateGroupInput"></a>

```typescript
public readonly canCreateGroupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-gitlab.user.User.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.user.User.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAdminInput`<sup>Optional</sup> <a name="isAdminInput" id="@cdktf/provider-gitlab.user.User.property.isAdminInput"></a>

```typescript
public readonly isAdminInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isExternalInput`<sup>Optional</sup> <a name="isExternalInput" id="@cdktf/provider-gitlab.user.User.property.isExternalInput"></a>

```typescript
public readonly isExternalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.user.User.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-gitlab.user.User.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: number;
```

- *Type:* number

---

##### `noteInput`<sup>Optional</sup> <a name="noteInput" id="@cdktf/provider-gitlab.user.User.property.noteInput"></a>

```typescript
public readonly noteInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-gitlab.user.User.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `projectsLimitInput`<sup>Optional</sup> <a name="projectsLimitInput" id="@cdktf/provider-gitlab.user.User.property.projectsLimitInput"></a>

```typescript
public readonly projectsLimitInput: number;
```

- *Type:* number

---

##### `resetPasswordInput`<sup>Optional</sup> <a name="resetPasswordInput" id="@cdktf/provider-gitlab.user.User.property.resetPasswordInput"></a>

```typescript
public readonly resetPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipConfirmationInput`<sup>Optional</sup> <a name="skipConfirmationInput" id="@cdktf/provider-gitlab.user.User.property.skipConfirmationInput"></a>

```typescript
public readonly skipConfirmationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-gitlab.user.User.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-gitlab.user.User.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `canCreateGroup`<sup>Required</sup> <a name="canCreateGroup" id="@cdktf/provider-gitlab.user.User.property.canCreateGroup"></a>

```typescript
public readonly canCreateGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-gitlab.user.User.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.user.User.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@cdktf/provider-gitlab.user.User.property.isAdmin"></a>

```typescript
public readonly isAdmin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isExternal`<sup>Required</sup> <a name="isExternal" id="@cdktf/provider-gitlab.user.User.property.isExternal"></a>

```typescript
public readonly isExternal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.user.User.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-gitlab.user.User.property.namespaceId"></a>

```typescript
public readonly namespaceId: number;
```

- *Type:* number

---

##### `note`<sup>Required</sup> <a name="note" id="@cdktf/provider-gitlab.user.User.property.note"></a>

```typescript
public readonly note: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.user.User.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `projectsLimit`<sup>Required</sup> <a name="projectsLimit" id="@cdktf/provider-gitlab.user.User.property.projectsLimit"></a>

```typescript
public readonly projectsLimit: number;
```

- *Type:* number

---

##### `resetPassword`<sup>Required</sup> <a name="resetPassword" id="@cdktf/provider-gitlab.user.User.property.resetPassword"></a>

```typescript
public readonly resetPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipConfirmation`<sup>Required</sup> <a name="skipConfirmation" id="@cdktf/provider-gitlab.user.User.property.skipConfirmation"></a>

```typescript
public readonly skipConfirmation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.user.User.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.user.User.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.user.User.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-gitlab.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.user.UserConfig.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-gitlab'

const userConfig: user.UserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.email">email</a></code> | <code>string</code> | The e-mail address of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.name">name</a></code> | <code>string</code> | The name of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.username">username</a></code> | <code>string</code> | The username of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.canCreateGroup">canCreateGroup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean, defaults to false. Whether to allow the user to create groups. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.isAdmin">isAdmin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean, defaults to false.  Whether to enable administrative privileges. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.isExternal">isExternal</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean, defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.namespaceId">namespaceId</a></code> | <code>number</code> | The ID of the user's namespace. Available since GitLab 14.10. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.note">note</a></code> | <code>string</code> | The note associated to the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.password">password</a></code> | <code>string</code> | The password of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.projectsLimit">projectsLimit</a></code> | <code>number</code> | Integer, defaults to 0.  Number of projects user can create. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.resetPassword">resetPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean, defaults to false. Send user password reset link. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.skipConfirmation">skipConfirmation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean, defaults to true. Whether to skip confirmation. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.state">state</a></code> | <code>string</code> | String, defaults to 'active'. The state of the user account. Valid values are `active`, `deactivated`, `blocked`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.user.UserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.user.UserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.user.UserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.user.UserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.user.UserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.user.UserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.user.UserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-gitlab.user.UserConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The e-mail address of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#email User#email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.user.UserConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#name User#name}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.user.UserConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#username User#username}

---

##### `canCreateGroup`<sup>Optional</sup> <a name="canCreateGroup" id="@cdktf/provider-gitlab.user.UserConfig.property.canCreateGroup"></a>

```typescript
public readonly canCreateGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean, defaults to false. Whether to allow the user to create groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#can_create_group User#can_create_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.user.UserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAdmin`<sup>Optional</sup> <a name="isAdmin" id="@cdktf/provider-gitlab.user.UserConfig.property.isAdmin"></a>

```typescript
public readonly isAdmin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean, defaults to false.  Whether to enable administrative privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#is_admin User#is_admin}

---

##### `isExternal`<sup>Optional</sup> <a name="isExternal" id="@cdktf/provider-gitlab.user.UserConfig.property.isExternal"></a>

```typescript
public readonly isExternal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean, defaults to false.

Whether a user has access only to some internal or private projects. External users can only access projects to which they are explicitly granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#is_external User#is_external}

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdktf/provider-gitlab.user.UserConfig.property.namespaceId"></a>

```typescript
public readonly namespaceId: number;
```

- *Type:* number

The ID of the user's namespace. Available since GitLab 14.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#namespace_id User#namespace_id}

---

##### `note`<sup>Optional</sup> <a name="note" id="@cdktf/provider-gitlab.user.UserConfig.property.note"></a>

```typescript
public readonly note: string;
```

- *Type:* string

The note associated to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#note User#note}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-gitlab.user.UserConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#password User#password}

---

##### `projectsLimit`<sup>Optional</sup> <a name="projectsLimit" id="@cdktf/provider-gitlab.user.UserConfig.property.projectsLimit"></a>

```typescript
public readonly projectsLimit: number;
```

- *Type:* number

Integer, defaults to 0.  Number of projects user can create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#projects_limit User#projects_limit}

---

##### `resetPassword`<sup>Optional</sup> <a name="resetPassword" id="@cdktf/provider-gitlab.user.UserConfig.property.resetPassword"></a>

```typescript
public readonly resetPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean, defaults to false. Send user password reset link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#reset_password User#reset_password}

---

##### `skipConfirmation`<sup>Optional</sup> <a name="skipConfirmation" id="@cdktf/provider-gitlab.user.UserConfig.property.skipConfirmation"></a>

```typescript
public readonly skipConfirmation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean, defaults to true. Whether to skip confirmation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#skip_confirmation User#skip_confirmation}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.user.UserConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

String, defaults to 'active'. The state of the user account. Valid values are `active`, `deactivated`, `blocked`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/resources/user#state User#state}

---



