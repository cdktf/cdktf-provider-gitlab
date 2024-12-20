# `groupSamlLink` Submodule <a name="`groupSamlLink` Submodule" id="@cdktf/provider-gitlab.groupSamlLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupSamlLink <a name="GroupSamlLink" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_saml_link gitlab_group_saml_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.Initializer"></a>

```typescript
import { groupSamlLink } from '@cdktf/provider-gitlab'

new groupSamlLink.GroupSamlLink(scope: Construct, id: string, config: GroupSamlLinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig">GroupSamlLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig">GroupSamlLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.resetMemberRoleId">resetMemberRoleId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMemberRoleId` <a name="resetMemberRoleId" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.resetMemberRoleId"></a>

```typescript
public resetMemberRoleId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GroupSamlLink resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.isConstruct"></a>

```typescript
import { groupSamlLink } from '@cdktf/provider-gitlab'

groupSamlLink.GroupSamlLink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.isTerraformElement"></a>

```typescript
import { groupSamlLink } from '@cdktf/provider-gitlab'

groupSamlLink.GroupSamlLink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.isTerraformResource"></a>

```typescript
import { groupSamlLink } from '@cdktf/provider-gitlab'

groupSamlLink.GroupSamlLink.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.generateConfigForImport"></a>

```typescript
import { groupSamlLink } from '@cdktf/provider-gitlab'

groupSamlLink.GroupSamlLink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GroupSamlLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupSamlLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupSamlLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_saml_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupSamlLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.memberRoleIdInput">memberRoleIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.samlGroupNameInput">samlGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.memberRoleId">memberRoleId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.samlGroupName">samlGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberRoleIdInput`<sup>Optional</sup> <a name="memberRoleIdInput" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.memberRoleIdInput"></a>

```typescript
public readonly memberRoleIdInput: number;
```

- *Type:* number

---

##### `samlGroupNameInput`<sup>Optional</sup> <a name="samlGroupNameInput" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.samlGroupNameInput"></a>

```typescript
public readonly samlGroupNameInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberRoleId`<sup>Required</sup> <a name="memberRoleId" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.memberRoleId"></a>

```typescript
public readonly memberRoleId: number;
```

- *Type:* number

---

##### `samlGroupName`<sup>Required</sup> <a name="samlGroupName" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.samlGroupName"></a>

```typescript
public readonly samlGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupSamlLinkConfig <a name="GroupSamlLinkConfig" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.Initializer"></a>

```typescript
import { groupSamlLink } from '@cdktf/provider-gitlab'

const groupSamlLinkConfig: groupSamlLink.GroupSamlLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Access level for members of the SAML group. Valid values are: `guest`, `reporter`, `developer`, `maintainer`, `owner`. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.group">group</a></code> | <code>string</code> | The ID or path of the group to add the SAML Group Link to. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.samlGroupName">samlGroupName</a></code> | <code>string</code> | The name of the SAML group. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_saml_link#id GroupSamlLink#id}. |
| <code><a href="#@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.memberRoleId">memberRoleId</a></code> | <code>number</code> | The ID of a custom member role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Access level for members of the SAML group. Valid values are: `guest`, `reporter`, `developer`, `maintainer`, `owner`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_saml_link#access_level GroupSamlLink#access_level}

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The ID or path of the group to add the SAML Group Link to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_saml_link#group GroupSamlLink#group}

---

##### `samlGroupName`<sup>Required</sup> <a name="samlGroupName" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.samlGroupName"></a>

```typescript
public readonly samlGroupName: string;
```

- *Type:* string

The name of the SAML group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_saml_link#saml_group_name GroupSamlLink#saml_group_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_saml_link#id GroupSamlLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberRoleId`<sup>Optional</sup> <a name="memberRoleId" id="@cdktf/provider-gitlab.groupSamlLink.GroupSamlLinkConfig.property.memberRoleId"></a>

```typescript
public readonly memberRoleId: number;
```

- *Type:* number

The ID of a custom member role.

Only available for Ultimate instances. When using a custom role, the `access_level` must match the base role used to create the custom role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/group_saml_link#member_role_id GroupSamlLink#member_role_id}

---



