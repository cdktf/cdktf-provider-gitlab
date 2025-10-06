# `tagProtection` Submodule <a name="`tagProtection` Submodule" id="@cdktf/provider-gitlab.tagProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagProtection <a name="TagProtection" id="@cdktf/provider-gitlab.tagProtection.TagProtection"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/tag_protection gitlab_tag_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.tagProtection.TagProtection.Initializer"></a>

```typescript
import { tagProtection } from '@cdktf/provider-gitlab'

new tagProtection.TagProtection(scope: Construct, id: string, config: TagProtectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionConfig">TagProtectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.tagProtection.TagProtection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.tagProtection.TagProtection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.tagProtection.TagProtection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionConfig">TagProtectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.putAllowedToCreate">putAllowedToCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.resetAllowedToCreate">resetAllowedToCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.resetCreateAccessLevel">resetCreateAccessLevel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.tagProtection.TagProtection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.tagProtection.TagProtection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.tagProtection.TagProtection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.tagProtection.TagProtection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.tagProtection.TagProtection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.tagProtection.TagProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.tagProtection.TagProtection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.tagProtection.TagProtection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.tagProtection.TagProtection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.tagProtection.TagProtection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.tagProtection.TagProtection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.tagProtection.TagProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.tagProtection.TagProtection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.tagProtection.TagProtection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.tagProtection.TagProtection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.tagProtection.TagProtection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.tagProtection.TagProtection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.tagProtection.TagProtection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.tagProtection.TagProtection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.tagProtection.TagProtection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.tagProtection.TagProtection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.tagProtection.TagProtection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.tagProtection.TagProtection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedToCreate` <a name="putAllowedToCreate" id="@cdktf/provider-gitlab.tagProtection.TagProtection.putAllowedToCreate"></a>

```typescript
public putAllowedToCreate(value: IResolvable | TagProtectionAllowedToCreate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.tagProtection.TagProtection.putAllowedToCreate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate">TagProtectionAllowedToCreate</a>[]

---

##### `resetAllowedToCreate` <a name="resetAllowedToCreate" id="@cdktf/provider-gitlab.tagProtection.TagProtection.resetAllowedToCreate"></a>

```typescript
public resetAllowedToCreate(): void
```

##### `resetCreateAccessLevel` <a name="resetCreateAccessLevel" id="@cdktf/provider-gitlab.tagProtection.TagProtection.resetCreateAccessLevel"></a>

```typescript
public resetCreateAccessLevel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TagProtection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.tagProtection.TagProtection.isConstruct"></a>

```typescript
import { tagProtection } from '@cdktf/provider-gitlab'

tagProtection.TagProtection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.tagProtection.TagProtection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.tagProtection.TagProtection.isTerraformElement"></a>

```typescript
import { tagProtection } from '@cdktf/provider-gitlab'

tagProtection.TagProtection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.tagProtection.TagProtection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.tagProtection.TagProtection.isTerraformResource"></a>

```typescript
import { tagProtection } from '@cdktf/provider-gitlab'

tagProtection.TagProtection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.tagProtection.TagProtection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.tagProtection.TagProtection.generateConfigForImport"></a>

```typescript
import { tagProtection } from '@cdktf/provider-gitlab'

tagProtection.TagProtection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TagProtection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.tagProtection.TagProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.tagProtection.TagProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TagProtection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.tagProtection.TagProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TagProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/tag_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.tagProtection.TagProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TagProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.allowedToCreate">allowedToCreate</a></code> | <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList">TagProtectionAllowedToCreateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.allowedToCreateInput">allowedToCreateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate">TagProtectionAllowedToCreate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.createAccessLevelInput">createAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.createAccessLevel">createAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.tag">tag</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedToCreate`<sup>Required</sup> <a name="allowedToCreate" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.allowedToCreate"></a>

```typescript
public readonly allowedToCreate: TagProtectionAllowedToCreateList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList">TagProtectionAllowedToCreateList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `allowedToCreateInput`<sup>Optional</sup> <a name="allowedToCreateInput" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.allowedToCreateInput"></a>

```typescript
public readonly allowedToCreateInput: IResolvable | TagProtectionAllowedToCreate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate">TagProtectionAllowedToCreate</a>[]

---

##### `createAccessLevelInput`<sup>Optional</sup> <a name="createAccessLevelInput" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.createAccessLevelInput"></a>

```typescript
public readonly createAccessLevelInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `createAccessLevel`<sup>Required</sup> <a name="createAccessLevel" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.createAccessLevel"></a>

```typescript
public readonly createAccessLevel: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.tagProtection.TagProtection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TagProtectionAllowedToCreate <a name="TagProtectionAllowedToCreate" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate.Initializer"></a>

```typescript
import { tagProtection } from '@cdktf/provider-gitlab'

const tagProtectionAllowedToCreate: tagProtection.TagProtectionAllowedToCreate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate.property.accessLevel">accessLevel</a></code> | <code>string</code> | Access levels allowed to create protected tags. Valid values are: `no one`, `developer`, `maintainer`, `admin`. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate.property.groupId">groupId</a></code> | <code>number</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate.property.userId">userId</a></code> | <code>number</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Access levels allowed to create protected tags. Valid values are: `no one`, `developer`, `maintainer`, `admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/tag_protection#access_level TagProtection#access_level}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/tag_protection#group_id TagProtection#group_id}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/tag_protection#user_id TagProtection#user_id}

---

### TagProtectionConfig <a name="TagProtectionConfig" id="@cdktf/provider-gitlab.tagProtection.TagProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.Initializer"></a>

```typescript
import { tagProtection } from '@cdktf/provider-gitlab'

const tagProtectionConfig: tagProtection.TagProtectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.project">project</a></code> | <code>string</code> | The id of the project. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.tag">tag</a></code> | <code>string</code> | Name of the tag or wildcard. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.allowedToCreate">allowedToCreate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate">TagProtectionAllowedToCreate</a>[]</code> | allowed_to_create block. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.createAccessLevel">createAccessLevel</a></code> | <code>string</code> | Access levels allowed to create. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/tag_protection#project TagProtection#project}

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Name of the tag or wildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/tag_protection#tag TagProtection#tag}

---

##### `allowedToCreate`<sup>Optional</sup> <a name="allowedToCreate" id="@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.allowedToCreate"></a>

```typescript
public readonly allowedToCreate: IResolvable | TagProtectionAllowedToCreate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate">TagProtectionAllowedToCreate</a>[]

allowed_to_create block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/tag_protection#allowed_to_create TagProtection#allowed_to_create}

---

##### `createAccessLevel`<sup>Optional</sup> <a name="createAccessLevel" id="@cdktf/provider-gitlab.tagProtection.TagProtectionConfig.property.createAccessLevel"></a>

```typescript
public readonly createAccessLevel: string;
```

- *Type:* string

Access levels allowed to create.

Default value of `maintainer`. The default value is always sent if not provided in the configuration. Valid values are: `no one`, `developer`, `maintainer`, `admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/tag_protection#create_access_level TagProtection#create_access_level}

---

## Classes <a name="Classes" id="Classes"></a>

### TagProtectionAllowedToCreateList <a name="TagProtectionAllowedToCreateList" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.Initializer"></a>

```typescript
import { tagProtection } from '@cdktf/provider-gitlab'

new tagProtection.TagProtectionAllowedToCreateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.get"></a>

```typescript
public get(index: number): TagProtectionAllowedToCreateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate">TagProtectionAllowedToCreate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagProtectionAllowedToCreate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate">TagProtectionAllowedToCreate</a>[]

---


### TagProtectionAllowedToCreateOutputReference <a name="TagProtectionAllowedToCreateOutputReference" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.Initializer"></a>

```typescript
import { tagProtection } from '@cdktf/provider-gitlab'

new tagProtection.TagProtectionAllowedToCreateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.resetUserId"></a>

```typescript
public resetUserId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.accessLevelDescription">accessLevelDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.userIdInput">userIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.userId">userId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate">TagProtectionAllowedToCreate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLevelDescription`<sup>Required</sup> <a name="accessLevelDescription" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.accessLevelDescription"></a>

```typescript
public readonly accessLevelDescription: string;
```

- *Type:* string

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: number;
```

- *Type:* number

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: number;
```

- *Type:* number

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagProtectionAllowedToCreate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.tagProtection.TagProtectionAllowedToCreate">TagProtectionAllowedToCreate</a>

---



